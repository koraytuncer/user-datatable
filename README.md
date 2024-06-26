
# React User DataTable

Bu, React kullanılarak geliştirilmiş bir web uygulamasıdır. Kullanıcı verilerini yönetmek ve görüntülemek için bir DataTable kullanır. Uygulama, kullanıcıları eklemek, güncellemek ve silmek için bir CRUD (Create, Read, Update, Delete) işlevselliği sağlar.

## Başlarken

Bu talimatlar, projenizi yerel makinenizde geliştirme ve test amacıyla kurmanıza yardımcı olacaktır. Daha fazla detay için aşağıdaki bölümlere bakınız.

### Önkoşullar

Projeyi yerel olarak çalıştırmak için, Node.js ve npm veya yarn yüklenmiş olmalıdır. Node.js'in nasıl yükleneceğiyle ilgili talimatlar için [Node.js resmi web sitesine](https://nodejs.org/) bakabilirsiniz.

```bash
# Node.js'i yüklemek için
node -v  # Node.js yüklü mü kontrol et
npm -v   # npm yüklü mü kontrol et

# veya
yarn -v  # Yarn yüklü mü kontrol et
```

### Kurulum

Bu adımlar, geliştirme ortamınızda projeyi nasıl çalıştıracağınızı göstermektedir:

1. Repo'yu klonlayın

```bash
git clone https://github.com/koraytuncer/user-datatable.git
cd user-datatable
```

2. Bağımlılıkları Yükleyin

```bash
npm install
# veya
yarn install
```

3. `.env` dosyasını oluşturun ve gerekli ortam değişkenlerini ekleyin

```plaintext
REACT_APP_API_URL=https://mockapi.io/projects/your_project_id
```

4. Uygulamayı çalıştırın

```bash
npm start
# veya
yarn start
```

Bu komutlar, uygulamayı geliştirme modunda başlatacak ve tarayıcınızda `http://localhost:3000` adresinde erişilebilir hale getirecektir. Uygulama kaynak dosyalarında herhangi bir değişiklik yaptığınızda, sayfa otomatik olarak yenilenecektir.

## Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzü bileşenleri
- **Material-UI**: UI kitaplığı, kullanıcı arayüzü elemanları için
- **react-toastify**: Bildirimler için
- **Axios**: HTTP istekleri
- **formik** ve **yup**: Form yönetimi ve validasyon

## Katkıda Bulunma

Projeye katkıda bulunmak istiyorsanız, lütfen aşağıdaki adımları takip edin:

1. Projeyi forklayın
2. Feature branch'ı oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'ı Push edin (`git push origin feature/AmazingFeature`)
5. Yeni bir Pull Request açın
