import axios from 'axios';

class StateSevice{
    getSateList(){
        return axios.get('http://127.0.0.1:8000/state/');
    }
}

export default new StateSevice()