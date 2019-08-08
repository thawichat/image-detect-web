import * as Axios from './Axios';
import LandmarkResponse from '../responses/LandmarkResponse';
import { AxiosRequestConfig } from 'axios';

export default class LabelDetectionService {


    public async landmarkDetect(file: File): Promise<LandmarkResponse> {
        return await this.landmarkDetectInner(file);
    }

    private async landmarkDetectInner(file: File): Promise<LandmarkResponse> {
        const formData = new FormData();
        formData.append('file', file);

        const axiosConfig: AxiosRequestConfig = {
            method: 'post',
            url: `http://localhost:3000/landmarkdetect`,
            data: formData,
            headers: {'Content-Type': 'multipart/form-data' },
        };

        const response = await Axios.axios(axiosConfig);
        return response.data;
    }

}
