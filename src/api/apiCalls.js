import axios from 'axios';
export default class apiCalls {
    static async GetAllDocuments() {
        const res = await axios
            .get('https://pdfuploader20221121222942.azurewebsites.net/api/documents')
            .catch((e) => console.log('catch', e));
        console.log(res);
        return res.data;
    }

    static async GetDocumentByName(name) {
        const res = await axios
            .get(`https://pdfuploader20221121222942.azurewebsites.net/api/fileupload/${name}`)
            .catch((e) => console.log('catch', e));
        console.log(res);
        return res;
    }

    static async uploadFile(file) {
        const res = await axios
            .post('https://pdfuploader20221121222942.azurewebsites.net/api/fileupload', file)
            .catch((e) => console.log('catch', e));
        console.log(res);
        return res.data;
    }

    static async addDocument(doc) {
        const res = await axios.post('https://pdfuploader20221121222942.azurewebsites.net/api/documents', doc).catch((e) => console.log(e));
        console.log(res);
        return res.data;
    }
}
