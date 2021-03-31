import {create} from 'apisauce';
import settings from '../config/settings';
import authStorage from '../auth/storage';

const apiClient = create({
    baseURL: settings.apiUrl,
});

// add x-auth-token for logged in users
apiClient.addAsyncRequestTransform(async (request)=> {
    const authToken = await authStorage.getToken();
    if(!authToken) return;
    request.headers["x-auth-token"] = authToken;
});

export default apiClient;