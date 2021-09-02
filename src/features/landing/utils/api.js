import axios from 'axios';

const getWidgetData = async () => {
  try {
    const res = await axios.get(
      'https://discordapp.com/api/v6/guilds/755231190134554696/widget.json'
    );
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};

function discordWidgetData() {
  return new Promise((resolve, reject) => {
    fetch('https://discordapp.com/api/v6/guilds/755231190134554696/widget.json', {
      method: 'GET',
      mode: 'cors',
      cache: 'reload',
      redirect: 'follow',
    })
      .then(response => {
        if (!response.ok) {
          reject(new Error(response.statusText));

          return;
        }
        resolve(response.json());
      })
      .catch(e => {
        console.log(e);

        reject(e);
      });
  });
}

export { discordWidgetData, getWidgetData };
