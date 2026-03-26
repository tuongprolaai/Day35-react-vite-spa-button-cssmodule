# **Buổi 35: Vite, CSS Module, React Router**

## **1\. Giới thiệu về Vite và công cụ Build (Build Tool)**

### **Hạn chế của việc sử dụng CDN thủ công**

* Nhúng thư viện thủ công đòi hỏi tự bật live server, tự cài Babel để chuyển đổi cú pháp  
* Cách làm này gây bất tiện và thiếu hiệu quả trong các dự án lớn

### **Vai trò của Build Tool (Vite)**

* Build tool (ví dụ: Vite, Webpack) giúp tự động hóa quá trình xây dựng dự án  
* Vite được ưa chuộng nhờ hiệu năng tốt và cấu hình đơn giản  
* Vite yêu cầu Node.js để hoạt động

### **Kiểm tra cài đặt Node.js và NPM**

`# Kiểm tra phiên bản Node.js`  
`node -v`

`# Kiểm tra phiên bản NPM`  
`npm -v`

`# Kiểm tra phiên bản NPX`  
`npx -v`

## **2\. Node.js, NPM và NPX**

### **Node.js**

* Môi trường chạy JavaScript bên ngoài trình duyệt (trên máy chủ hoặc máy tính)  
* Cho phép JavaScript làm được cả backend, không chỉ frontend

### **NPM (Node Package Manager)**

* Trình quản lý các gói (thư viện) JavaScript  
* Hoạt động như một kho lưu trữ (store) cho các thư viện, tương tự App Store hay Google Play

Cài đặt thư viện:  
	`npm install <tên_thư_viện>`

### **NPX**

* Dùng để chạy một thư viện mà không cần cài đặt trực tiếp vào máy tính hoặc dự án  
* Tải xuống, thực thi và xóa thư viện sau khi dùng xong  
* Thường dùng cho các dòng lệnh tiện ích chạy một lần

### **File package.json và node\_modules**

* **`package.json`**: Chứa thông tin dự án và danh sách các thư viện phụ thuộc  
  * `dependencies`: Thư viện cần thiết cho cả quá trình phát triển và sản phẩm cuối cùng (production)  
  * `devDependencies`: Thư viện chỉ cần thiết trong quá trình phát triển (ví dụ: công cụ build, linter)  
* **`node_modules`**: Thư mục chứa tất cả các thư viện đã được cài đặt, bao gồm cả các thư viện phụ thuộc của các thư viện khác

## **3\. Cấu trúc dự án React với Vite**

### **Tạo dự án React mới với Vite**

\# Di chuyển đến thư mục mong muốn  
cd your-project-folder

\# Tạo dự án trong thư mục hiện tại  
npm create vite .

\# Chọn React và JavaScript (hoặc TypeScript)  
\# Cài đặt các thư viện cần thiết  
npm install

\# Khởi động máy chủ phát triển  
npm run dev

### **Khởi động và quản lý máy chủ phát triển**

* Lệnh `npm run dev` sẽ bật một máy chủ web (thường là cổng 5173\) bằng Node.js  
* Thay thế cho Live Server, hỗ trợ hot refresh (tự động cập nhật code mà không tải lại toàn bộ trang)  
* Cần giữ terminal chạy để máy chủ hoạt động; Ctrl+C để tắt

### **Cấu trúc thư mục cơ bản**

my-react-app/  
├── public/              \# Chứa file công khai (ảnh, font, v.v.)  
├── src/                 \# Thư mục chứa mã nguồn chính  
│   ├── components/      \# Các component dùng chung  
│   ├── pages/          \# Các trang của ứng dụng  
│   ├── App.jsx         \# Component gốc  
│   ├── main.jsx        \# Entry point  
│   └── index.css       \# Global CSS  
├── index.html          \# File HTML duy nhất (SPA)  
├── vite.config.js      \# Cấu hình Vite  
└── package.json        \# Quản lý thư viện và script

## **4\. CSS trong React: Global CSS và CSS Module**

### **Global CSS**

Import file CSS trực tiếp vào file JS/JSX  
 import './index.css'

*   
* Các class CSS sẽ có phạm vi toàn cục, có thể gây trùng lặp tên và ghi đè style  
* Phù hợp cho các style chung của toàn bộ ứng dụng (reset CSS, font-family)

### **CSS Module**

Đặt tên file CSS theo quy ước `.module.css` (hoặc `.module.scss`)

 // Component.module.css  
.heading {  
  color: blue;  
  font-size: 2rem;  
}

.button {  
  background: \#007bff;  
  color: white;  
}

* 

Import CSS Module dưới dạng một object:

 import styles from './Component.module.css'

function MyComponent() {  
  return (  
    \<div\>  
      \<h1 className={styles.heading}\>Title\</h1\>  
      \<button className={styles.button}\>Click me\</button\>  
    \</div\>  
  )  
}

*   
* Các class CSS sẽ được mã hóa (ví dụ: `heading_abcxyz`) để đảm bảo tính duy nhất và tránh trùng lặp

* Giúp cô lập style cho từng component, dễ quản lý hơn

### **Sử dụng Sass/SCSS với Vite**

\# Cài đặt thư viện sass  
npm install \-D sass

// Component.module.scss  
$primary-color: \#007bff;

.button {  
  background: $primary-color;  
  color: white;  
    
  &:hover {  
    background: darken($primary-color, 10%);  
  }  
}

## **5\. Tư duy chia Component và Cấu trúc dự án thực tế**

### **Nguyên tắc chia Component**

* Mỗi component nên nằm trong một file riêng để dễ quản lý và tái sử dụng  
* Tên file component thường trùng với tên component (ví dụ: `Button.jsx`)  
* Sử dụng cú pháp ES6 module (import/export) để quản lý các component

### **Cấu trúc thư mục Component**

src/  
├── components/  
│   ├── Button/  
│   │   ├── index.jsx           \# Component chính  
│   │   └── Button.module.scss  \# CSS Module  
│   ├── Header/  
│   │   ├── index.jsx  
│   │   └── Header.module.scss  
│   └── Layout/  
│       ├── index.jsx  
│       └── Layout.module.scss  
└── pages/  
    ├── Home/  
    │   ├── index.jsx  
    │   └── Home.module.scss  
    └── About/  
        ├── index.jsx  
        └── About.module.scss

Ví dụ Button component:

// src/components/Button/index.jsx  
import styles from './Button.module.scss'

function Button({ children, onClick, type \= 'button' }) {  
  return (  
    \<button   
      className={styles.button}   
      onClick={onClick}   
      type={type}  
    \>  
      {children}  
    \</button\>  
  )  
}

export default Button

### **JSX và JS**

* File `.jsx` được dùng khi có code JSX bên trong  
* File `.js` dùng khi chỉ có JavaScript thuần  
* Vite tự động phát hiện JSX, nhưng việc đặt tên file đúng giúp tối ưu hiệu năng build

## **6\. Prop Types và Validation**

### **Vấn đề của JavaScript với kiểu dữ liệu**

* JavaScript là ngôn ngữ định kiểu yếu, khó xác định kiểu dữ liệu của prop khi nhìn vào code  
* Dễ dẫn đến lỗi khi truyền sai kiểu dữ liệu cho prop

### **Sử dụng Prop Types để định kiểu Prop**

import PropTypes from 'prop-types'  
import styles from './Button.module.scss'

function Button({ children, title, onClick, disabled, size }) {  
  return (  
    \<button   
      className={styles.button}   
      title={title}  
      onClick={onClick}  
      disabled={disabled}  
    \>  
      {children}  
    \</button\>  
  )  
}

Button.propTypes \= {  
  children: PropTypes.node.isRequired,  
  title: PropTypes.string,  
  onClick: PropTypes.func,  
  disabled: PropTypes.bool,  
  size: PropTypes.oneOf(\['small', 'medium', 'large'\])  
}

Button.defaultProps \= {  
  disabled: false,  
  size: 'medium'  
}

export default Button

### **Các kiểu dữ liệu PropTypes phổ biến**

* `PropTypes.node`: Chấp nhận bất kỳ thứ gì có thể render được (chuỗi, số, React element)  
* `PropTypes.string`, `PropTypes.number`, `PropTypes.bool`  
* `PropTypes.array`, `PropTypes.object`  
* `PropTypes.func` (cho function)  
* `PropTypes.oneOf(['value1', 'value2'])` (enum)  
* `.isRequired`: Đánh dấu prop là bắt buộc  
* Prop Types chỉ đưa ra cảnh báo (warning) cho lập trình viên, không phải lỗi (error)

### **ESLint và Prop Types**

* ESLint là thư viện giúp kiểm tra và cảnh báo các vấn đề về coding convention  
* Cảnh báo khi prop không được định nghĩa kiểu hoặc không được sử dụng  
* Nên cài đặt tiện ích ESLint cho VS Code để nhận cảnh báo trực tiếp

## **7\. Thư viện CLSX để quản lý Class Name**

### **Vấn đề khi kết hợp nhiều Class Name**

Việc nối chuỗi class name bằng toán tử ba ngôi hoặc template literal có thể trở nên phức tạp:

// Cách làm phức tạp  
const className \= \`${styles.button} ${primary ? styles.primary : ''} ${round ? styles.round : ''} ${border ? styles.border : ''}\`.trim()

### **Sử dụng CLSX**

\# Cài đặt thư viện clsx  
npm install clsx

import clsx from 'clsx'  
import styles from './Button.module.scss'

function Button({   
  children,   
  primary,   
  round,   
  border,   
  size \= 'medium',  
  className,  
  ...restProps   
}) {  
  const buttonClass \= clsx(  
    styles.button,  
    {  
      \[styles.primary\]: primary,  
      \[styles.round\]: round,  
      \[styles.border\]: border,  
      \[styles.small\]: size \=== 'small',  
      \[styles.large\]: size \=== 'large'  
    },  
    className // Cho phép override từ bên ngoài  
  )

  return (  
    \<button className={buttonClass} {...restProps}\>  
      {children}  
    \</button\>  
  )  
}

CLSX giúp:

* Viết code quản lý class name gọn gàng và dễ đọc hơn  
* Tự động loại bỏ các class falsy  
* Hỗ trợ nhiều định dạng input (string, object, array)

## **8\. Thiết kế Component linh hoạt (Button Component)**

### **Điều khiển logic bằng Prop**

import PropTypes from 'prop-types'  
import clsx from 'clsx'  
import styles from './Button.module.scss'

function Button({   
  children,  
  primary \= false,  
  round \= false,  
  border \= false,  
  size \= 'medium',  
  disabled \= false,  
  href,  
  className,  
  ...restProps  
}) {  
  // Quyết định element gốc dựa trên có href hay không  
  const Element \= href ? 'a' : 'button'  
    
  const buttonClass \= clsx(  
    styles.button,  
    {  
      \[styles.primary\]: primary,  
      \[styles.secondary\]: \!primary,  
      \[styles.round\]: round,  
      \[styles.border\]: border,  
      \[styles.small\]: size \=== 'small',  
      \[styles.large\]: size \=== 'large',  
      \[styles.disabled\]: disabled  
    },  
    className  
  )

  const elementProps \= {  
    className: buttonClass,  
    ...(href ? { href } : { type: 'button', disabled }),  
    ...restProps  
  }

  return (  
    \<Element {...elementProps}\>  
      {children}  
    \</Element\>  
  )  
}

Button.propTypes \= {  
  children: PropTypes.node.isRequired,  
  primary: PropTypes.bool,  
  round: PropTypes.bool,  
  border: PropTypes.bool,  
  size: PropTypes.oneOf(\['small', 'medium', 'large'\]),  
  disabled: PropTypes.bool,  
  href: PropTypes.string,  
  className: PropTypes.string,  
  onClick: PropTypes.func  
}

export default Button

CSS Module tương ứng:

// Button.module.scss  
.button {  
  padding: 12px 24px;  
  border: none;  
  border-radius: 4px;  
  cursor: pointer;  
  font-size: 16px;  
  transition: all 0.2s;  
  display: inline-flex;  
  align-items: center;  
  justify-content: center;  
  text-decoration: none;

  &.primary {  
    background: \#007bff;  
    color: white;  
      
    &:hover:not(.disabled) {  
      background: \#0056b3;  
    }  
  }

  &.secondary {  
    background: \#6c757d;  
    color: white;  
      
    &:hover:not(.disabled) {  
      background: \#545b62;  
    }  
  }

  &.round {  
    border-radius: 50px;  
  }

  &.border {  
    border: 2px solid currentColor;  
    background: transparent;  
  }

  &.small {  
    padding: 8px 16px;  
    font-size: 14px;  
  }

  &.large {  
    padding: 16px 32px;  
    font-size: 18px;  
  }

  &.disabled {  
    opacity: 0.6;  
    cursor: not-allowed;  
  }  
}

### **Sử dụng Component linh hoạt**

// Các cách sử dụng khác nhau  
function App() {  
  return (  
    \<div\>  
      {/\* Button thường \*/}  
      \<Button onClick={() \=\> alert('Clicked\!')}\>  
        Default Button  
      \</Button\>

      {/\* Button primary \*/}  
      \<Button primary onClick={() \=\> console.log('Primary clicked')}\>  
        Primary Button  
      \</Button\>

      {/\* Button như link \*/}  
      \<Button href="/about" primary round\>  
        Go to About  
      \</Button\>

      {/\* Button tùy chỉnh \*/}  
      \<Button   
        primary   
        round   
        size="large"   
        className="my-custom-class"  
        style={{ margin: '10px' }}  
      \>  
        Custom Button  
      \</Button\>  
    \</div\>  
  )  
}

### **Tái sử dụng và ghi đè Style**

* Component được thiết kế linh hoạt giúp tái sử dụng dễ dàng ở nhiều nơi  
* Sử dụng prop `className` để cho phép người dùng truyền thêm class CSS tùy chỉnh, ghi đè style mặc định  
* Sử dụng toán tử spread (`...restProps`) để truyền tất cả các prop còn lại vào element gốc, giúp component chấp nhận các thuộc tính HTML tiêu chuẩn mà không cần định nghĩa tường minh

### **Thay đổi Element gốc của Component**

* Có thể sử dụng một biến để quyết định element gốc của component (ví dụ: `button` hoặc `a`)  
* Dùng toán tử ba ngôi để chọn element dựa trên prop (ví dụ: `hasHref ? 'a' : 'button'`)  
* Giúp component linh hoạt hơn, có thể hoạt động như một button hoặc một link tùy theo ngữ cảnh

## **9\. React Router DOM và Single Page Application (SPA)**

### **Hạn chế của Multiple Page Application (MPA)**

* Mỗi trang là một file HTML riêng biệt, dẫn đến việc tải lại toàn bộ trang khi chuyển hướng  
* Gây trải nghiệm người dùng không mượt mà và tốn tài nguyên

### **Giới thiệu React Router DOM**

* Thư viện giúp xây dựng Single Page Application (SPA) trong React  
* Cho phép điều hướng giữa các "trang" mà không tải lại toàn bộ file HTML

Cài đặt:  
 npm install react-router-dom

* 

### **Cấu hình Router cơ bản**

// main.jsx  
import React from 'react'  
import ReactDOM from 'react-dom/client'  
import { BrowserRouter } from 'react-router-dom'  
import App from './App.jsx'  
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(  
  \<React.StrictMode\>  
    \<BrowserRouter\>  
      \<App /\>  
    \</BrowserRouter\>  
  \</React.StrictMode\>,  
)

// App.jsx  
import { Routes, Route } from 'react-router-dom'  
import Layout from './components/Layout'  
import Home from './pages/Home'  
import About from './pages/About'  
import Contact from './pages/Contact'  
import NotFound from './pages/NotFound'

function App() {  
  return (  
    \<div className="App"\>  
      \<Routes\>  
        \<Route path="/" element={\<Layout /\>}\>  
          \<Route index element={\<Home /\>} /\>  
          \<Route path="about" element={\<About /\>} /\>  
          \<Route path="contact" element={\<Contact /\>} /\>  
          \<Route path="\*" element={\<NotFound /\>} /\>  
        \</Route\>  
      \</Routes\>  
    \</div\>  
  )  
}

export default App

### **Cấu trúc thư mục Pages**

src/  
├── pages/  
│   ├── Home/  
│   │   ├── index.jsx  
│   │   └── Home.module.scss  
│   ├── About/  
│   │   ├── index.jsx  
│   │   └── About.module.scss  
│   ├── Contact/  
│   │   ├── index.jsx  
│   │   └── Contact.module.scss  
│   └── NotFound/  
│       ├── index.jsx  
│       └── NotFound.module.scss

Ví dụ Page component:

// src/pages/Home/index.jsx  
import styles from './Home.module.scss'

function Home() {  
  return (  
    \<div className={styles.home}\>  
      \<h1\>Welcome to Home Page\</h1\>  
      \<p\>This is the home page content.\</p\>  
    \</div\>  
  )  
}

export default Home

### **Điều hướng với Link và NavLink**

// components/Navigation/index.jsx  
import { Link, NavLink } from 'react-router-dom'  
import styles from './Navigation.module.scss'

function Navigation() {  
  return (  
    \<nav className={styles.navigation}\>  
      {/\* Link thường \- không có active state \*/}  
      \<Link to="/" className={styles.logo}\>  
        My App  
      \</Link\>

      {/\* NavLink \- tự động thêm class active \*/}  
      \<div className={styles.menu}\>  
        \<NavLink   
          to="/"   
          className={({ isActive }) \=\>   
            isActive ? \`${styles.menuItem} ${styles.active}\` : styles.menuItem  
          }  
        \>  
          Home  
        \</NavLink\>  
          
        \<NavLink   
          to="/about"  
          className={({ isActive }) \=\>   
            isActive ? \`${styles.menuItem} ${styles.active}\` : styles.menuItem  
          }  
        \>  
          About  
        \</NavLink\>  
          
        \<NavLink   
          to="/contact"  
          className={({ isActive }) \=\>   
            isActive ? \`${styles.menuItem} ${styles.active}\` : styles.menuItem  
          }  
        \>  
          Contact  
        \</NavLink\>  
      \</div\>  
    \</nav\>  
  )  
}

export default Navigation

### **Sử dụng với CLSX cho NavLink**

import { NavLink } from 'react-router-dom'  
import clsx from 'clsx'  
import styles from './Navigation.module.scss'

function Navigation() {  
  return (  
    \<nav className={styles.navigation}\>  
      \<NavLink   
        to="/"  
        className={({ isActive }) \=\> clsx(styles.menuItem, {  
          \[styles.active\]: isActive  
        })}  
      \>  
        Home  
      \</NavLink\>  
        
      \<NavLink   
        to="/about"  
        className={({ isActive }) \=\> clsx(styles.menuItem, {  
          \[styles.active\]: isActive  
        })}  
      \>  
        About  
      \</NavLink\>  
    \</nav\>  
  )  
}

### **Layout Component với Outlet**

// components/Layout/index.jsx  
import { Outlet } from 'react-router-dom'  
import Navigation from '../Navigation'  
import Footer from '../Footer'  
import styles from './Layout.module.scss'

function Layout() {  
  return (  
    \<div className={styles.layout}\>  
      \<Navigation /\>  
        
      \<main className={styles.main}\>  
        {/\* Outlet sẽ render component của route hiện tại \*/}  
        \<Outlet /\>  
      \</main\>  
        
      \<Footer /\>  
    \</div\>  
  )  
}

export default Layout

### **Xử lý Active State với NavLink**

* `NavLink` cung cấp prop `className` nhận một callback function với tham số `isActive`  
* Dựa vào `isActive`, có thể trả về class CSS tùy chỉnh để highlight menu đang active  
* Kết hợp với CSS Module để đảm bảo class active không bị trùng lặp  
* Không sử dụng thẻ `<a>` HTML truyền thống để điều hướng trong React Router DOM vì nó sẽ tải lại trang  
* Prop `to` thay thế cho `href` khi sử dụng `Link` và `NavLink`