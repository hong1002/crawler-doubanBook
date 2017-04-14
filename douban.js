var cheerio = require('cheerio')

class Book {
    constructor() {
        // ratings是评价人数
        this.name = ''
        this.score = 0
        this.quote = ''
        this.area = ''
        this.year = ''
        this.ratings = ''
    }
}

var log = require('./utils').log
var cached_url = require('./utils').cached

var getArea = function(version) {
    var area = version.split('[')[1]
    if (area == undefined) {
        area = '中'
    } else {
        area = area.split(']')[0]
        if (area == '美国') {
            area = '美'
        }
        if (area == '清' | area == '明') {
            area = '中'
        }
    }
    return area
}

var bookFromDiv = function(div) {
    var e = cheerio.load(div)
    var book = new Book()
    book.name = e('.pl2').text().trim().split('\n')[0]
    book.score = e('.rating_nums').text()
    book.quote = e('.inq').text()

    var version = e('p.pl').text()
    var year = version.split('-')[0].slice(-4)
    book.year = year
    book.area = getArea(version)

    var ratings = e('.star').find('span').last().text()
    book.ratings = ratings.slice(22, -18)

    return book
}

var booksFromUrl = function(url) {
    var body = cached_url(url)

    var e = cheerio.load(body)

    var bookDivs = e('.item')

    var books = []
    for (var i = 0; i < bookDivs.length; i++) {
        var div = bookDivs[i]
        var m = bookFromDiv(div)
        books.push(m)
    }
    return books
}



var __main = function() {
    var books = []
    for (var i = 0; i < 10; i++) {
        var start = i * 25
        var url = 'https://book.douban.com/top250?start=' + start
        log('url', url)
        var bs = booksFromUrl(url)
        books = books.concat(bs)
    }
    
    var utils = require('./utils')
    utils.save('book.json', books)
}

__main()
