import { MessagingApiClient } from "@line/bot-sdk/dist/messaging-api/api";
import { LINE_CHANNEL_ACCESS_TOKEN } from "../configs";


export interface httpClientConfig {
  baseURL?: string;
  channelAccessToken: string;
}

const config: httpClientConfig = {
  channelAccessToken: LINE_CHANNEL_ACCESS_TOKEN
}

const client = new MessagingApiClient(config)

export default client
