Scrapping BTC
--------------

what is it?
===========

the program uses the scrap method to search the internet for the value of the dollar in Colombia
and look at the price of Bitcoin.
To run the program, you need to install the modules that you can see in the package.
use npm install.

Automated method of analysis about the bitcoin of localbitcoin in relation to its current price.

Structure of the code
=====================

The program generates a server using the Express.js and Node.js frameworks
The proper reading of the program is:
mainScript.js, read.js, operation.js and server.js
the mainScript is the initial program where the web scraping process is performed where from the cheerio libraries, request and axios take the information from the markers indicated in the variable ($) which is used by Jquery; the request is a package used to download web pages, while cheerio generates a DOM tree and provides a subset of the jQuery function set to manipulate it. At the end of the data retrieval process, the data is exported to a .txt file as a string.
The read takes care of filtering the data obtained in .txt and cleans it of characters that are not desired for the process. When the filtering process is finished, the data is exported in a .JSON file as ready-to-use values.
Operation is the part of the program that is used to export the necessary data as variables ready to use in the server, this program has as main characteristic the use of asynchronous type functions created from promises which are an object that represents the termination or the eventual failure of an asynchronous operation.
Finally in the server is used express.js which together with node.js will generate the app in a certain port and read the data obtained in the html file or user interface. And this data together with the data returned by the previous promise will be evaluated to generate the alert and to be able to send the mail, the html works from a function made in java script where to generate the click in the submit will execute some modules based on Ajax, AJAX means asynchronous JavaScript and XML (Asynchronous JavaScript and XML). It is a set of web development techniques that allow web applications to work asynchronously, processing any request to the server in the background. 



Instructions
=====================
Enter the minimum value you would like to buy
Enter the maximum value at which you want to buy Bitcoins
The value of the percentage is the relationship between the value of the official bitcoin and the value of the BTC sellers' pages
Indicate the email address to which you would like to receive the BTC sales links

    NOTE: remember that the purchase value of the limits is from 1 peso to 30 million Colombian pesos






APP
=====================

https://btc-looking.herokuapp.com/





=====================
 © COPYRIGHT 2020
 Fundamentos de Programacion
 User: juanmahecha9
 
