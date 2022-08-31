const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
    name: {
        type: String,   // 定義該 field 的類型
        trim: true,     // 是否需要消除前後空格
    }
});

// Compile Schema 變成 Model，如此可以透過這個 Model 建立和儲存 document
// 會在 mongo 中建立名為 School 的 collection
module.exports = mongoose.model('School', schoolSchema);