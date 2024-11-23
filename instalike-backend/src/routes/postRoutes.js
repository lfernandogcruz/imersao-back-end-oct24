import express from 'express';
import multer from 'multer';
import cors from 'cors';
import { postarNovoPost, listarPosts, uploadImagem, atualizaNovoPost } from '../controller/postsController.js';

const corsOptions = {
  origin: 'http://localhost:8000',
  optionsSuccessStatus: 200,
};

const upload = multer({ dest: './uploads' });

const routes = (app) => {
  app.use(express.json());
  app.use(cors(corsOptions));
  
  app.get('/posts', listarPosts);
  
  app.post('/posts', postarNovoPost);

  app.post('/upload', upload.single('imagem'), uploadImagem);

  app.put('/upload/:id', atualizaNovoPost);
};

export default routes;
