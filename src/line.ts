import { MessagingApiBlobClient, MessagingApiClient } from "@line/bot-sdk/dist/messaging-api/api";
import { LINE_CHANNEL_ACCESS_TOKEN, LINE_CHANNEL_SECRET } from "./configs"


interface httpClientConfig {
  baseURL?: string;
  channelAccessToken: string;
  // TODO support defaultHeaders?
}

const config: httpClientConfig = {
  channelAccessToken: LINE_CHANNEL_ACCESS_TOKEN
}

const client = new MessagingApiClient(config)

export default client
