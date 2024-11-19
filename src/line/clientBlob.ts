import { MessagingApiBlobClient } from "@line/bot-sdk/dist/messaging-api/api"
import { httpClientConfig } from "./client"
import { LINE_CHANNEL_ACCESS_TOKEN } from "../configs"

const config: httpClientConfig = {
  channelAccessToken: LINE_CHANNEL_ACCESS_TOKEN
}

const clientBlob = new MessagingApiBlobClient(config)

export default clientBlob
