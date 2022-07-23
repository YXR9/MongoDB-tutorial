
![](https://i.imgur.com/JQDfxca.png)

mongo 的命名本意，不是芒果喔~Hu**mongo**us 巨大、龐大的這個單字才是它的本意！！

### **在提 MongoDB 之前，先了解一下什麼是 NoSQL 呢？**
NoSQL 的本質是一類資料庫的泛稱，它包含數個不同的模型來存取和管理資料，每個模型都適合特定使用案例，圖 1 提供四個常見的模型：

![](https://i.imgur.com/4ZDneZK.png)
圖 1、NoSQL 資料庫的資料模型
###### 圖片來源：[關聯式與NoSQL 資料](https://docs.microsoft.com/zh-tw/dotnet/architecture/cloud-native/relational-vs-nosql-data)

* **文件存放區（Document Store）**：

資料和中繼資料會以階層方式儲存在資料庫內以 JSON 為基礎的文件中。如下圖：

![](https://i.imgur.com/PUIfmFS.png)
###### 圖片來源：[非關聯式資料和 NoSQL](https://docs.microsoft.com/zh-tw/azure/architecture/data-guide/big-data/non-relational-data)

適合用來儲存：

    - 網頁資料或各種 XML 格式的文件
    - 圖片或影音資料
* **機碼值存放區（Key-Value Store）**：

NoSQL 資料庫最簡單的方法，資料會以機碼值組的集合表示，具有水平擴充性，能按需要增加資料庫。如下圖：

![](https://i.imgur.com/yvFmc8A.png)
###### 圖片來源：[非關聯式資料和 NoSQL](https://docs.microsoft.com/zh-tw/azure/architecture/data-guide/big-data/non-relational-data)

適合用來儲存：
    
    - 社群網站或社交遊戲產生的 TB 或 PB 等級的資料
    
    

![](https://i.imgur.com/Czay7jr.png)
###### 圖片來源：[儲存容量單位](https://blog.miniasp.com/post/2010/04/08/unit-information-Bit-Byte-KB-MB-GB-TB-PB-EB-ZB-YB)

* **Wide-Column 存放區（Wide-Column Store）**：

相關資料會以一組巢狀結構機碼值組的形式儲存在單一資料行中，也就是每一行可以有不同的 column，相當於一個無限多 column 的 table，美行有很多的 NULL value（空格），可以無 schema 限制，自由擴展。如下圖：

![](https://i.imgur.com/YR5CdgC.png)
###### 圖片來源：[模型介绍](https://help.aliyun.com/document_detail/89879.html)

> 你們知道 Schema 是什麼嗎？
> -
> 
> Schema 是資料庫中非常重要的部分！！是用來定義你的資料庫要長麼樣子、資料的型態、大小等等，而之後的資料必須符合當初設定的結構，不然會無法增加資料。

* **圖形存放區（Graph Store）**：

資料會以節點、關係和資料屬性的形式儲存在圖形結構中。如下圖：

![](https://i.imgur.com/ovWEKgZ.png)
###### 圖片來源：[非關聯式資料和 NoSQL](https://docs.microsoft.com/zh-tw/azure/architecture/data-guide/big-data/non-relational-data)

可以用樹狀結構來：

    - 記錄社交網站的朋友關係
    - 記錄地圖上每一點和鄰近的點的關係
    - 計算點與點或人與人之間最短（交友）距離
### **NoSQL 不可不知的五項觀念**
#### 觀念 1：NoSQL 是 Not Only SQL
NoSQL 最初表示 Non-SQL，後來有人轉解為 Not Only SQl，SQL 語言是關聯式資料庫的標準查詢語言，而 Not Only SQL 的意思是混用關聯式資料庫和 NoSQL 資料庫來達成最佳的儲存效果。

#### 觀念 2：增加機器就能自動擴充資料庫容量
NoSQL 資料庫的一個重要特性是具有水平擴充能力，只要增加新的伺服器節點，就可以不斷擴充資料庫系統的容量。

#### 小結：

簡而言之，就是只要增加新的伺服器設備，就能自動增加資料庫的容量。從管理角度來看，可以減少長期維護資料庫的人力。

#### 觀念 3：打破 Schema 欄位架構的限制
NoSQL 資料庫是用 Key-Value 資料模式來解決龐大資料的異動困難。將一筆資料的結構簡化到只有一個 Key 值對應到一個 Value 值，每一筆資料之間沒有關連性，所以能任意切割或調整，也能分散到不同的伺服器中建立副本。

#### 觀念 4：資料遲早會一致
NoSQL資料庫是採用 CAP 資料庫理論。

> CAP 資料庫理論有三個關鍵：
> 1. 資料一致性（Consistent）
> 2. 可用性（Availability）
> 3. 中斷容忍性（Partition Tolerance）
> 
> 理論上無法同時兼顧 CAP 這三種特性，所以，NoSQL 資料庫通常會選擇其中兩種特性來設計，通常是選擇 CP 或 AP，多數 NoSQL 資料庫是選擇 CP 的設計。

不過，NoSQL 資料庫中的資料一致性和關聯式資料庫的意義不同。NoSQL資料庫會採取 Eventually Consistency（資料遲早會一致）的作法，因為 NoSQL 是分散式設計的，它會將資料分散複製到不同節點中，每個節點各自也能異動資料，再彼此同步。同步過程就會有時間落差，若同時讀取不同節點上的資料，會發生資料不一致的情況。

NoSQL 資料庫為了保持分散式的擴充架構，容許這樣的情況，只有保證最後資料會達到一致。但資料尚未同步的短暫時間內就需要開發者自行解決資料衝突或遺失的問題，或者是用 NoSQL 資料庫來記錄那些對精確度要求較低的資料，例如 Facebook 的按讚，即使少了幾個讚的紀錄，使用者也不容易發現，就適合用 NoSQL 資料庫來儲存。

#### 小結：

導入NoSQL資料庫時，開發者得先評估資料的性質，是否能承擔資料遺失的風險。

#### 觀念 5：成熟度不足，版本升級風險高
近幾年社交網站盛行，而 NoSQL 資料庫就是要用來解決使用者貢獻資料的暴漲問題。但很多 NoSQL 資料庫都是這2、3年內才出現，所以，資料庫本身的功能還不完整，也較少出現成熟穩定的版本，版本升級過程中很容易會出現不相容的情形。

此外，NoSQL 資料庫大多透過 API 來存取資料，新的版本若增加了新的功能，也會改變這些 API 的參數或呼叫方式。這時開發者就會遇到得重新修改應用程式，才能取得資料庫中的內容。更慘的還可能會遇到資料庫本身儲存的檔案格式有變動，升級新版本資料庫後，就無法讀取舊版檔案，這時就必須進行格式轉檔。

所以呢~要找合適的 NoSQL 資料庫的話，挑選知名網站使用的資料庫會比較好！因為這些知名網站通常也是這些資料庫的貢獻者，他們為了解決自身的使用問題，會比較積極地完善資料庫。

#### 小結：

雖然 NoSQL 資料庫提供了另外一種低成本的分散式資料庫，自動擴充節點的功能可以節省資料庫維護人力，但是，相對地，也須承擔技術不夠成熟時的變動風險。

###### 資料來源：[了解NoSQL不可不知的5項觀念](https://www.ithome.com.tw/news/92506)

### **為什麼選 MongoDB 作為 NoSQL 學習的對象呢？**
從圖 2 可以預見，圖 2 是現在 Database 受歡迎程度的排序表，可以看到 MongoDB 在 2022 年 7 月排名第 5，也是前 5 名唯一一個文件導向（Document-oriented database）的資料庫管理系統的資料庫，下一個相同性質的資料庫已經排到 41 名了，所以要挑一個 CP 值最高的就屬 MongoDB 了~

※ MongoDB 版本：v5.0.9

![](https://i.imgur.com/N4YY74O.png)
圖 2、[DB-Engines Ranking](https://db-engines.com/en/ranking) （評分依據包含goolge、Bing搜尋熱度、Stack Overflow、LinkedIn的提及次數等）

### **簡單的介紹一下 MongoDB 這個資料庫**
用一句話來概括的話，MongoDB 是一個可擴展、高性能、開源、文件導向的資料庫。

database、collection、document及 field 為 MongoDB 資料庫最基本的四項概念，以下對照 MongoDB 與 MySQL 之間的對應關係：


| MongoDB    | MySQL    |
| ---------- | -------- |
| database   | database |
| collection | table |
| document | row |
| field | column |

用圖示化的方式來看看他們的區別：
![](https://i.imgur.com/LTTckHI.png)
###### 圖片來源: [Day 12 MongoDB 資料庫介紹](https://ithelp.ithome.com.tw/articles/10205527)

MongoDB 中，每一筆被儲存的資料為 document，其資料結構為 BSON（binary JSON），是一種 JSON-like 的格式，例如：

![](https://i.imgur.com/oIZs2df.png)

每個 document 是由 field-value 的形式儲存資料，以上圖為例如下：

| field | value |
| ----- | ----- |
| content  | 一般來說，產生十億瓦電力需要250平方英哩的風力發電廠。在某些地方，例如丹麥和德國，他們以風力發電為主，幾乎用盡所有適用地點  |


### **牛刀小試**
說了這麼多 MongoDB 的特點，事實上還是有它適合與不適合的應用場景，請判斷下列這些，哪些是適合用 MongoDB 來實作的呢？
1. 資料格式不確定 (unstable schema)，而未來很有可能調整
1. 資料之間沒有複雜的關聯、或未來讀取資料時不需要使用 JOIN 的功能
1. 快取：著重在快速讀取資料與可用性，而非 ACID
1. 大型檔案的儲存
1. 需擴充
1. 高交易需求的系統，例如：銀行/會計系統
1. [商業智慧（Business Intelligence，簡稱 BI）](https://www.oracle.com/tw/what-is-business-intelligence/)應用：泛指一切能針對特定問題的 BI 資料庫會進行特殊優化的查詢方式，幫助組織做出更佳決策、採取明智行動並提高業務流程效率。對於此類型應用應採用 [資料倉儲（Data Warehouse）](https://www.oracle.com/tw/database/what-is-a-data-warehouse/) 較合適。

> #### 資料倉儲（Data Warehouse）
> 它會集中管理並整合來自於大量來源的大量資料。它的分析功能能讓組織從資料中推知寶貴的資料見解，以改善決策制定。

解答：編號 1~5 都適合用 MongoDB 實作

###### 延伸閱讀: [是否該用 MongoDB？選擇資料庫前你該了解的事](https://tw.alphacamp.co/blog/mysql-and-mongodb-comparison)

### **開始實作吧！**

首先登場的是 MongoDB Atlas！！

想要在 Cloud 使用 MongoDB 的使用者，MongoDB Atlas 會是你最好的選擇😏

你可以自由的在 AWS、AZURE、GCP 上多達80個區域部署使用MongoDB，所以也可以自由地將已經部署好的MongoDB做線上的跨區域部署或是跨雲搬移。

同時 Atlas 亦滿足了雲端資料庫的所有需求，例如：權限/網路/備份/安全/自動化等功能。

### **接下來是時候要來動動手囉~**

Step 1. 建立 [MongoDB Altas](http://140.115.126.37:666/link/86#bkmrk-step-1.-%E5%BB%BA%E7%AB%8B-mongodb-a) 帳戶（可選擇使用 Google 帳戶登入）

![](https://i.imgur.com/UnaviWb.png)

Step 2. 勾選並點選 Submit

![](https://i.imgur.com/pwcv8MM.png)

Step 3.  選擇完即完成前置作業

![](https://i.imgur.com/FWtLjmG.png)

Step 4. 選擇 Shared Clusters 並點選 Create

![](https://i.imgur.com/eSAW9k7.png)

Step 5. 輸入名稱至 Cluster Name 欄位並點選 Create Cluster

![](https://i.imgur.com/Qvmdi80.png)

Step 6. 點選 Connect

![](https://i.imgur.com/HuOAClf.png)

Step 7. 點選 Add Your Current IP Address

![](https://i.imgur.com/l0vH5T0.png)

 Step 8. 點選 Add IP Address

![](https://i.imgur.com/Fhtxf15.png)

Step 9. 設定 Username 與 Password（可點選 Autogenerate Secure Password 自動生成密碼），並點選 Create Database User

![](https://i.imgur.com/XzLusqV.png)

Step 10. 點選 Choose a connection method

![](https://i.imgur.com/jU9Mt8X.png)

Step 11. 點選 Connect your application

![](https://i.imgur.com/0AmL0ij.png)

Step 12. 選擇 DRIVER（Nodejs）及 VERSION（4.0 or later），並複製下方的 connection string 至自己的 application code（<password>要填上自己的 password）如下：

![](https://i.imgur.com/1qyuiGw.png)

### **下周預告**
* 將 MongoDB 與 Node.js 做連結
* 實作基礎 CRUD
* 面試 - 資料庫考題

###### 連接 MongoDB 檔案: https://github.com/YXR9/MongoDB-tutorial.git 


### **Reference**
* [NoSQL 定義](https://zh.wikipedia.org/zh-tw/NoSQL)
* [什麼是 NoSQL](https://aws.amazon.com/tw/nosql/)
* [DB-Engines Ranking](https://db-engines.com/en/ranking)
* [[MongoDB] 學習筆記(一) - 安裝、基礎CRUD、外部輸入資料、Data Type](https://medium.com/@mingjiehsu/mongodb-%E5%AD%B8%E7%BF%92%E7%AD%86%E8%A8%98-%E4%B8%80-%E5%AE%89%E8%A3%9D-%E5%9F%BA%E7%A4%8Ecrud-%E5%A4%96%E9%83%A8%E8%BC%B8%E5%85%A5%E8%B3%87%E6%96%99-data-type-1169000cf02c)
* [MongoDB 零基礎從入門到精通](https://www.udemy.com/course/best-mongodb/)
* [Day 12 MongoDB 資料庫介紹](https://ithelp.ithome.com.tw/articles/10205527)
* [MongoDB 新手學習 -網路文章入門法](http://13.231.129.69/2021/08/27/mongodb-%E6%96%B0%E6%89%8B%E5%AD%B8%E7%BF%92-%E7%B6%B2%E8%B7%AF%E6%96%87%E7%AB%A0%E5%85%A5%E9%96%80%E6%B3%95/)