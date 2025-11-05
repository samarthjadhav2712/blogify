# Blogify

A full-stack blogging platform (Blogify) with a React + Vite frontend and an Express + MongoDB backend.  
This repository contains a production-oriented starter with image upload, simple admin auth, comment moderation, and an AI-powered content generation endpoint.

## Project overview
Blogify provides:
- Public blog listing and blog detail pages (read-only for public).
- Admin panel to add/list/publish/delete blogs and moderate comments.
- Image uploads (ImageKit) and AI-assisted content generation (Google Gemini).
- Simple JWT-based admin authentication.

## Database models (summary)

- Blog model: — fields: title, subTitle, description, category, image, isPublished (timestamps enabled). Model exported as `Blog`.
- Comment model:— fields: blog (ObjectId ref to blog), name, content, isApproved, timestamps. Model exported as `Comment`.

## Tech stack & dependencies

Server
- express — web framework (routing, middleware) 
- mongoose — MongoDB ODM
- multer — multipart/form-data (file uploads) 
- imagekit — ImageKit SDK for image uploads & URL transforms 
- jsonwebtoken — JWT creation & verification
- @google/genai — Gemini integration for AI content generation 
- cors, dotenv, nodemon (dev)

Client 
- react, react-dom — UI
- vite — dev server & bundling 
- react-router-dom — client routing 
- axios — HTTP client 
- quill — rich text editor 
- marked — markdown parsing (used in Addblog)
- dompurify — sanitize HTML (installed; recommended for XSS protection where dangerouslySetInnerHTML is used)
- moment — date formatting
- react-hot-toast — notifications (used across admin components)
- tailwindcss & @tailwindcss/vite 