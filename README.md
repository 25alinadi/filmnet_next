
## Filment Task

برای نصب پکیج های مربوطه ابتدا دستور زیر را اجرا کنید
```bash
npm install
# or
yarn add
```

برای اجرای برنامه میتوانید از دستورات زیر استفاده نمایید
```bash
npm run dev
# or
yarn dev
```

نتیجه را در مسیر http://localhost:3000 در مرورگر خود تماشا کنید

## نکته 
بعلت زدن ریکوئست ها از local من چند باری خطای cors گرفتم که برای حل این مشکل cors مرورگر را غیرفعال کنید

## توضیحات
برای نمایش اطلاعات و صفحه مربوطه سعی شد مواردی که در فایل ارسالی گفته شده فقط اجرا بشه و کار بیشتری انجام نشه و متناسب با فایل ارسالی و تصاویر قرار داده شده در آن پروژه در سطح نمایشگر لپ تاپ و گوشی های همراه طراحی شده

برای ایجاد پروژه بعلت امتیاز از nextjs13 استفاده شده  و برای مدیریت محتوا از redux-toolkit
همچنین در این پروژه از typescript نیز استفاده شد.
وگرنه پروژه رو میشد با vite ایجاد کرد و پروژه react بعلاوه typescript بالا آورد و با استفاده از react-router-dom مسیر دهی مربوطه رو انجام داد.

برای استایل دهی هم از styled-component  استفاده شد و کامپوننت Card با styled-component زده شده

برای مدیریت دیتا هم از redux-toolkit استفاده کردم که بعد از کانفیگ کردن با استفاده از createAsyncThunk ریکوئست ها را به سرور زده و با استفاده از extraReducer در وضعیت های مختلف دیتا را مدیریت و برای کاربر نمایش دادم
همچنین هربار که اسکرول به انتهای صفحه میرسه ریکویست جدید برای مقادیر زده میشه