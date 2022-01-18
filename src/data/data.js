import axios from 'axios';

export default async function data() {

    const response = await axios.get('https://randomuser.me/api/?results=5');
    return response
}
