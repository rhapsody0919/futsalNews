# fnews

This is an app where people can filiter out the news which you are interested in. You can custom you favourte keyword to get the releated news from other news website. You don't have to spend time looking at a news article which you are not interested in and you can also share your favourite news with others.

## Instructions

1. Clone this repository
    ```
    git clone https://github.com/rhapsody0919/futsalNews.git
    ```

1. Set your own `.env` file

1. Create your Expo account

1. Install and setup the Expo client app in your device

1. Build the images
    ```
    docker-compose build
    ```

1. Start the containers
    ```
   docker-compose run -p 19000:19000 -p 19001:19001 -p 19002:19002 --rm react_native bash --login
   ```
1. `yarn`

1. `expo start`

1. Read the QR code with your device

