    // استخراج رقم الإصدار المكتوب في الكارت تلقائياً
    const cardElement = document.querySelector('.update-card');
    const currentVersion = cardElement ? cardElement.getAttribute('data-version') : '1.0.1';

    // عند الضغط على زر التحميل
    document.querySelector('.btn-download').addEventListener('click', (e) => {
      const url = e.currentTarget.getAttribute('data-url');
      window.parent.postMessage({ type: 'DOWNLOAD_UPDATE', url: url }, '*');
    });

    // عند الضغط على زر التخطي
    document.querySelector('.btn-skip').addEventListener('click', () => {
      window.parent.postMessage({ type: 'CLOSE_UPDATE_MODAL', version: currentVersion }, '*');
    });