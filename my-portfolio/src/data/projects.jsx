export const projects = [
  {
    title: 'Kaggle Science LLM Exam',
    link: 'https://www.kaggle.com/certification/competitions/shivamtaneja2304/kaggle-llm-science-exam',
    stack: ['K-Means', 'RAG', 'Model Ensembling', 'FAISS', 'TF-IDF'],
    description: [
      <>
        Reduced RAG size by <strong>95%</strong> using <strong>K-Means clustering</strong>, resolving Out of Memory errors.
      </>,
      <>
        Improved <strong>Mean Average Precision</strong> to <strong>0.902 (+7%)</strong> through <strong>RAG</strong> and model <strong>ensembling</strong>.
      </>,
      <>
        Achieved <strong>20%</strong> faster retrieval using <strong>TF-IDF</strong> embeddings; reduced index size from <strong>900GB to 9.66GB</strong> with <strong>FAISS IVFPQ</strong>.
      </>,
      <>
        Ranked <strong>Top 7% (172/2662)</strong> worldwide on <strong>Kaggle</strong> and awarded a <strong>Bronze Medal</strong>.
      </>,
    ],
  },
  {
    title: 'Kaggle – The Learning Agency Lab – PII Data Detection',
    link: 'https://www.kaggle.com/certification/competitions/shivamtaneja2304/pii-detection-removal-from-educational-data',
    stack: ['Quantization', 'DeBERTa', 'Model Ensembling'],
    description: [
      <>
        Improved inference speed by <strong>30%</strong> on small and <strong>200%</strong> on large LLMs through <strong>quantization</strong>.
      </>,
      <>
        Used a <strong>weighted ensemble</strong> of four <strong>DeBERTa models</strong> to achieve an <strong>F-score (β=5)</strong> of <strong>0.957</strong>.
      </>,
      <>
        Placed <strong>Top 9% globally</strong> on <strong>Kaggle</strong> (164/2048) and received a <strong>Bronze Medal</strong>.
      </>,
    ],
  },
  {
    title: 'Sahar Wellness',
    link: 'http://saharwellness.in',
    stack: ['React', 'Node.js', 'MongoDB', 'WebP', 'CI/CD'],
    description: [
      <>
        Reduced front-end load time from <strong>3s to 0.3s</strong> by optimizing with <strong>React Lazy</strong>, <strong>useContext</strong>, and converting assets to <strong>WebP</strong> format.
      </>,
      <>
        Built a responsive slot booking platform using <strong>MongoDB</strong>, <strong>React</strong>, and <strong>Node.js</strong> for seamless scheduling across user types, cutting manual booking time and significantly reducing slot overlap and time conflicts.
      </>,
      <>
        Set up <strong>CI/CD pipelines</strong> with isolated test and production environments, cutting feature cycle time from <strong>10 to 3–4 days</strong> and reducing prod errors from <strong>1 in 10</strong> to <strong>1 in 100</strong>.
      </>,
    ],
  },
];
