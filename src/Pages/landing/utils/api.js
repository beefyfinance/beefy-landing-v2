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

export { getWidgetData };
