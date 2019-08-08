import * as Axios from './Axios';
import LandmarkResponse from '../responses/LandmarkResponse';
import { AxiosRequestConfig } from 'axios';

export default class LabelDetectionService {


    public async labelDetect(file: File): Promise<LandmarkResponse> {
        return await this.labelDetectInner(file);
    }

    private async labelDetectInner(file: File): Promise<LandmarkResponse> {
        const formData = new FormData();
        formData.append('file', file);

        const axiosConfig: AxiosRequestConfig = {
            method: 'post',
            url: `http://localhost:3000/labeldetect`,
            data: formData,
            headers: {'Content-Type': 'multipart/form-data' },
        };

        const response = await Axios.axios(axiosConfig);
        console.log(response.data);
        return response.data;
    }

}
