import * as Axios from './Axios';
import AccessPoint from '../serveraccess/AccessPoint';
import LabelResponse from '../responses/LabelResponse';
import { AxiosRequestConfig } from 'axios';

export default class LabelDetectionService {
    private path = AccessPoint.LOCAL;

    public async labelDetect(file: File): Promise<LabelResponse> {
        return await this.labelDetectInner(file);
    }

    private async labelDetectInner(file: File): Promise<LabelResponse> {
        const formData = new FormData();
        formData.append('file', file);

        const axiosConfig: AxiosRequestConfig = {
            method: 'post',
            url: `${this.path}/labeldetect`,
            data: formData,
            headers: {'Content-Type': 'multipart/form-data' },
        };

        const response = await Axios.axios(axiosConfig);
        return response.data;
    }

}
