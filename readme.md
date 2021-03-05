<div dir="rtl">

حضور خودکار در کلاس های مجازی [lms.ui.ac.ir](http://lms.ui.ac.ir/)
=====

این برنامه هر ۱۰ ثانیه چک میکنه که  وضعیت کلاسی تو سامانه `درحال برگزاری` شده یا نه و اگر کلاسی در این وضعیت قرار گرفت یک صفحه مرورگر کروم باز میکنه و تو کلاس مورد نظر در حالت `Listen Only` حاضر شده و یک پیام `Salam` در چت عمومی ارسال میکنه.

بعد از این کار برای اطمینان بیشتر یک اسکرین شات از صفحه کلاس گرفته و در دایرکتوری screenshot ذخیره میکند.

چجوری ازش استفاده کنیم ؟
----------
من این برنامه رو فقط روی محیط یه سیستم عامل اوبونتو بیس تست کردم ولی فکر کنم مشکل زیادی با بقیه سیستم عامل ها نداشته باشه.

> رو سیستم تون باید nodejs ترجیحا ورژن 14 نصب باشه.

> کروم باید نصب کرده باشین آدرس فایل  اجرایی اون رو تو اینجا بذارین. 
آدرس فایل اجرایی رو هم تو لینوکسی با کامند `which google-chrome` میتونین در بیارین.
(البته من یه مقدار دیفالت گذاشتم براش که اکثرا کار میکنه برا همه)

۱. اول پروژه رو کلون کنید.
```
git clone https://github.com/sajad-sadra/auto-lmsui-present.git
```
2. بعد برید تو دایرکتوری پروژه و دستور زیر را اجرا کنید دا پکیج های مورد نیاز نصب بشه
```
npm install
```
3. بعد باید یوزرنیم و پسورد سامانه تون رو بهش بدین

کامند زیر رو بزنید:
```
cp sample.env .env
```
حالا برید فایل .env رو مقدار هاش رو تغییر بدین
```
USER=نام کابری
PASS=رمز عبور
SSID=یه استرینگ رندوم
```
ssid هرچیزی میتونه باشه فقط باید تغییرش بدین که به فنا نرین!!!

مثلا میتونین خروجی این کامند رو بذارین جاش...
```
openssl rand -hex 6
```
یا برین تو این سایتایی که پسورد جنریت میکنن یه چی بسازین بذارین جاش.

4. حالا برنامه رو اجرا کنین
```
npm start
```

در پایان
------
بچه های خوبی باشین و سر کلاساتون به موقع حاضر بشید ;))

در ضمن اگه مشکلی داشتی هم داشتین اینجا بگین.

پول ریکوست هم بدین ممنون میشم :)
</div>