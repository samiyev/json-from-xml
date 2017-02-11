json-from-xml
===========

Xml convert to JSON.

Installation
============

npm install json-from-xml

Usage
=====

No extensive tutorials required because you are a smart developer! The task of
parsing XML should be an easy one, so let's make it so! Here's some examples.

Shoot-and-forget usage
----------------------

You want to parse XML as simple and easy as possible? It's dangerous to go
alone, take this:
```xml

var xml = `<?xml version="1.0" encoding="UTF-8"?>
           <CBU_Curr name="CBU Currency XML by ISO 4217">
               <CcyNtry ID="840">
                   <Ccy>USD</Ccy>
                   <CcyNm_RU>Доллар США</CcyNm_RU>
                   <CcyNm_UZ>AQSh dollari</CcyNm_UZ>
                   <CcyNm_UZC>АҚШ доллари</CcyNm_UZC>
                   <CcyNm_EN>U.S. Dollar</CcyNm_EN>
                   <CcyMnrUnts>2</CcyMnrUnts>
                   <Nominal>1</Nominal>
                   <Rate>3294.74</Rate>
                   <date>07.02.2017</date>
               </CcyNtry>
           </CBU_Curr>`

```

```javascript

var XmlParser = require('json-from-xml');
var result = XmlParser.parse(xml);

console.log(result);
```

```javascript

var XmlParser = require('json-from-xml');
var result = XmlParser.parse(xml);

console.log(result);
```

or ES6 usage
----------------------

```javascript
var XmlParser = require('json-from-xml').Promise;

async function getData(xml){
    try{
        var result = await XmlParser.parse(xml);
        return result;
    }
    catch(error){
        throw error;
    }
}

console.log(getData(xml));
```
Result
-------------------
```json
    {
        name: 'CBU Currency XML by ISO 4217',
        CcyNtry: {
             ID: '840',
             Ccy: 'USD',
             CcyNm_RU: 'Доллар США',
             CcyNm_UZ: 'AQSh dollari',
             CcyNm_UZC: 'АҚШ доллари',
             CcyNm_EN: 'U.S. Dollar',
             CcyMnrUnts: '2',
             Nominal: '1',
             Rate: '3294.74',
             date: '07.02.2017'
        }
    }
```


Simple as pie usage
-------------------
```javascript

var fs = require('fs'),
var XmlParser = require('json-from-xml');

fs.readFile(__dirname + '/foo.xml', function(err, data) {
    var result = XmlParser.parse(data);
    console.dir(result);
    console.log('Done');
});
```
Result
-------------------
```json
    {
        name: 'CBU Currency XML by ISO 4217',
        CcyNtry: {
             ID: '840',
             Ccy: 'USD',
             CcyNm_RU: 'Доллар США',
             CcyNm_UZ: 'AQSh dollari',
             CcyNm_UZC: 'АҚШ доллари',
             CcyNm_EN: 'U.S. Dollar',
             CcyMnrUnts: '2',
             Nominal: '1',
             Rate: '3294.74',
             date: '07.02.2017'
        }
    }
```

One more example
-------------------
```javascript
var request = require('request');
var XmlParser = require('json-from-xml');

request('http://cbu.uz/uzc/arkhiv-kursov-valyut/xml/USD/2017:02:11/')
    .on('data', function (data) {
       var result = XmlParser.parse(data.toString());
       console.log(result);
    });
```
Result
-------------------
```json
    {
        name: 'CBU Currency XML by ISO 4217',
        CcyNtry: {
             ID: '840',
             Ccy: 'USD',
             CcyNm_RU: 'Доллар США',
             CcyNm_UZ: 'AQSh dollari',
             CcyNm_UZC: 'АҚШ доллари',
             CcyNm_EN: 'U.S. Dollar',
             CcyMnrUnts: '2',
             Nominal: '1',
             Rate: '3294.74',
             date: '07.02.2017'
        }
    }
```
