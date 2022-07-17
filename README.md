# **MongoDB**
### **在提 MongoDB 之前，先了解一下什麼是 NoSQL 呢？**
NoSQL 的本質是一類資料庫的泛稱，目前有以下四種比較受到關注的 NoSQL 資料庫：
1. Key-Value 資料庫
2. 記憶體資料庫（In-memory Database）
3. 文件數資料庫（Document Database）
4. 圖學資料庫（Graph Database）

NoSQL 最初表示 Non-SQL，後來有人轉解為 Not Only SQl，SQL 語言是關聯式資料庫的標準查詢語言，而 Not Only SQL 的意思是混用關聯式資料庫和 NoSQL 資料庫來達成最佳的儲存效果。
> **延伸閱讀：**
> [了解NoSQL不可不知的5項觀念](https://www.ithome.com.tw/news/92506)
> 

### **為什麼選 MongoDB 作為 NoSQL 學習的對象呢？**
從圖 1 可以預見，圖 1 是現在 Database 受歡迎程度的排序表，可以看到 MongoDB 在 2022 年 7 月排名第 5，也是前 5 名唯一一個文件導向（Document-oriented database）的資料庫管理系統的資料庫，下一個相同性質的資料庫已經排到 41 名了，所以要挑一個 CP 值最高的就屬 MongoDB 了~

※ MongoDB 版本：v5.0.9

![](https://i.imgur.com/N4YY74O.png)
圖 1、[DB-Engines Ranking](https://db-engines.com/en/ranking) （評分依據包含goolge、Bing搜尋熱度、Stack Overflow、LinkedIn的提及次數等）

### **簡單的介紹一下 MongoDB 這個資料庫**
用一句話來概括的話，MongoDB 是一個可擴展、高性能、開源、文件導向的資料庫。

### **說了這麼多 MongoDB 的特點，事實上還是有它適合與不適合的應用場景：**
* 適合：
    * 網站登入 & 登出
    * 快取
    * 大型檔案的儲存
    * 需擴充
    * 事件紀錄
* 不適合：
    * 高交易需求的系統：銀行/會計系統
    * BI 應用：針對特定問題的 BI 資料庫會進行特殊優化的查詢方式，對於此類型應用應採用 Data Warehouse 較合適。

### **Reference**
* [NoSQL 定義](https://zh.wikipedia.org/zh-tw/NoSQL)
* [什麼是 NoSQL](https://aws.amazon.com/tw/nosql/)
* [DB-Engines Ranking](https://db-engines.com/en/ranking)
* [[MongoDB] 學習筆記(一) - 安裝、基礎CRUD、外部輸入資料、Data Type](https://medium.com/@mingjiehsu/mongodb-%E5%AD%B8%E7%BF%92%E7%AD%86%E8%A8%98-%E4%B8%80-%E5%AE%89%E8%A3%9D-%E5%9F%BA%E7%A4%8Ecrud-%E5%A4%96%E9%83%A8%E8%BC%B8%E5%85%A5%E8%B3%87%E6%96%99-data-type-1169000cf02c)
* [MongoDB 零基礎從入門到精通](https://www.udemy.com/course/best-mongodb/)
* [Day 12 MongoDB 資料庫介紹](https://ithelp.ithome.com.tw/articles/10205527)