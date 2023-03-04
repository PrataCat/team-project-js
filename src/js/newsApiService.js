const API_KEY = 'xiA2oqSwY7oUdkxynOuoZzJzlQ7EJz4s';

const ArticleSearchEndpoint =
  'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const MostPopularEndpoint = 'https://api.nytimes.com/svc/mostpopular/v2/viewed';
const TimesWireEndpoint = 'https://api.nytimes.com/svc/news/v3/content';


async function getCategories() {
  try {
    const response = await fetch(
      `${TimesWireEndpoint}/section-list.json?api-key=${API_KEY}`
    );
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.log(error);
  }
}

// GET Category articles functions

async function fetchCategoryArticles(category, limit, offset) {
  try {
    const response = await fetch(
      `${TimesWireEndpoint}/all/${category}.json?api-key=${API_KEY}&limit=${limit}&offset=${offset}`
    );
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.log(error);
  }
}

async function getCategoryArticles(category, limit = 8, offset = 0) {
  try {
    const data = await fetchCategoryArticles(category, limit, offset);

    const normalizedData = data.map(item => {
      const { title, abstract, published_date, url, section, multimedia, uri } =
        item;
      const resultObj = {
        title,
        abstract,
        published_date: dateFormat(published_date),
        url,
        section,
        image_url: multimedia[2].url,
        id: uri.split('/')[3],
      };
      return resultObj;
    });
    // console.log(normalizedData);
    return normalizedData;
  } catch (error) {
    console.log(error);
  }
}

// GET Most popular articles functions

async function fetchMostPopularArticles(days = 7) {
  try {
    if (![1, 7, 30].includes(days)) {
      console.log('incorrect period');
      return;
    }
    const response = await fetch(
      `${MostPopularEndpoint}/${days}.json?api-key=${API_KEY}`
    );
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.log(error);
  }
}

async function getMostPopularArticles(days = 7) {
  try {
    const data = await fetchMostPopularArticles(days);

    const normalizedData = data.map(item => {
      const { title, abstract, published_date, url, section, media, uri } =
        item;
      const image_url = media[0] ? media[0]['media-metadata'][2].url : '';
      const resultObj = {
        title,
        abstract,
        published_date: dateFormat(published_date),
        url,
        section,
        image_url,
        id: uri.split('/')[3],
      };
      return resultObj;
    });
    // console.log(normalizedData);
    return normalizedData;
  } catch (error) {
    console.log(error);
  }
}

// GET Search articles functions

async function fetchSearchArticles(query, pub_date, page) {
  try {
    const pubDate = pub_date ? `&fq=pub_date:${pub_date}` : '';
    const response = await fetch(`${ArticleSearchEndpoint}?api-key=${API_KEY}&page=${page}&q=${query}${pubDate}`);
    const data = await response.json();

    return data.response.docs;
  } catch (error) {
    console.log(error);
  }
}

async function getSearchArticles(query, pub_date, page=0) {
  try {
    const data = await fetchSearchArticles(query, pub_date, page);

    const normalizedData = data.map(item => {
      const { headline, abstract, pub_date, web_url, subsection_name, multimedia, uri } =
        item;
      const resultObj = {
        title: headline.main,
        abstract,
        published_date: dateFormat(pub_date),
        url: web_url,
        section: subsection_name,
        image_url:
          'https://static01.nyt.com/' +
          multimedia.find(item => item.subtype === 'mediumThreeByTwo440').url,
        id: uri.split('/')[3],
      };
      return resultObj;
    });
    // console.log(normalizedData)
    return normalizedData;
  } catch (error) {
    console.log(error);
  }
}

function dateFormat(str) {
  return new Date(str).toLocaleString().slice(0, 10).split('.').join('/');
}


// getCategories();
// getMostPopularArticles();
// getCategoryArticles('arts');
// getSearchArticles('politics');


export { getCategories, getCategoryArticles, getMostPopularArticles, getSearchArticles }