# VA-Service

Usage - Start WITHOUT Seeding Database

npm start

Build

npm run build

Usage - Seed Database Script

npm run seed

# Server Endpoints

## Banners Table

#### GET - /api/banners

Returns all banners in Banners Table

#### GET - /api/banner/:bannerId

Returns a banner based on the bannerId provided as a URL param

#### POST - /api/banner

Creates a new banner record in the database. Information for the new record is provided within the body of the request

#### PATCH - /api/banner/:bannerId

Updates a banner based on the bannerId provided as a URL param

#### DELETE - /api/banner/:bannerId

Deletes a banner based on the bannerId provided as a URL param

## Videos Table

#### GET - /api/videos

Returns all videos in the Videos Table

#### GET - /api/video/:videoId

Returns a video based on the videoId provided as a URL param

#### POST  - /api/video

Creates a new video record in the database. Information for the new record is provided within the body of the request.

#### PATCH - /api/video/:videoId

Updates a video based on the videoId provided as a URL param

#### DELETE - /api/video/:videoId

Deletes a video based on the videoId provided as a URL param