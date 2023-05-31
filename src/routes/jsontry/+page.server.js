/*

const graphqlRequest = {
	query: `
  {
      allMediaLogos {
    name
    alt
    logo {
      height
      width
      url
      responsiveImage {
        aspectRatio
      }
    }
  }
  
}
    `
};

const response = await fetch('https://graphql.datocms.com/', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		Authorization: 'Bearer 0ef3ac689f1143d98a681078e6b63e'
	},
	body: JSON.stringify(graphqlRequest)
});

const mediaData = await response.json();
const media = 


const { parsedResponse } = await response.json();
const medialogos = parsedResponse.allMediaLogos;
here we split the reply into sections */

export const load = async () => {
	return {
		product: 'iPhone 14'
	};
};

/* here we split the reply into sections */
