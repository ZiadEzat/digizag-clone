// ==UserScript==
// @name         Replace First Table on Billing Page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Replace the first table with a new table on the billing page
// @author       You
// @match        https://digizag.hasoffers.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log('Script loaded');

    // Function to replace table
    function replaceTable() {
        // Check if the URL contains the billing path
        if (window.location.href.includes("/publisher/#!/billing")) {

            // New table HTML
     var newTableHTML = `<table class="table table-striped hasTable">
    <thead>
        <tr class="hasTableHeaderRow ng-scope">
            <th>Statement</th>
            <th>Date/Time</th>
            <th>Message</th>
            <th>Amount</th>
        </tr>
    </thead>
    <tbody> <tr data-has-row="2129" class="ng-scope">
    <td>
      <a href="#!/invoice/2329" class="ng-binding">
         Invoice #2329
      </a>
    </td>
    <td class="ng-binding">
      2022-08-10 16:35:42
    </td>
    <td class="ng-binding">

    </td>
    <td class="ng-binding">0.17906</td>
  </tr><tr data-has-row="2214" class="ng-scope">
    <td>
      <a href="#!/invoice/2128" class="ng-binding">
         Invoice #2214
      </a>
    </td>
    <td class="ng-binding">
      2022-07-06 16:57:35
    </td>
    <td class="ng-binding">

    </td>
    <td class="ng-binding">0.14591224</td>
  </tr><tr data-has-row="2127" class="ng-scope">
    <td>
      <a href="#!/invoice/2127" class="ng-binding">
         Invoice #2127
      </a>
    </td>
    <td class="ng-binding">
      2022-06-03 12:27:55
    </td>
    <td class="ng-binding">

    </td>
    <td class="ng-binding">0.13193703</td>
  </tr><tr data-has-row="808" class="ng-scope">
    <td>
      <a href="#!/invoice/2048" class="ng-binding">
         Invoice #2048
      </a>
    </td>
    <td class="ng-binding">
      2022-05-05 17:33:06
    </td>
    <td class="ng-binding">

    </td>
    <td class="ng-binding">0.05813139</td>
  </tr><tr data-has-row="718" class="ng-scope">
    <td>
      <a href="#!/invoice/1958" class="ng-binding">
         Invoice #1958
      </a>
    </td>
    <td class="ng-binding">      2022-04-10 08:50:16

</td>
    <td class="ng-binding">

    </td>
    <td class="ng-binding">0.05049431</td>
  </tr><tr data-has-row="576" class="ng-scope">
    <td>
      <a href="#!/invoice/1876" class="ng-binding">
         Invoice #1876
      </a>
    </td>
    <td class="ng-binding">
      2022-03-03 17:23:15
    </td>
    <td class="ng-binding">

    </td>
    <td class="ng-binding">0.09146341</td>
  </tr><tr data-has-row="542" class="ng-scope">
    <td>
      <a href="#!/invoice/1782" class="ng-binding">
         Invoice #1782
      </a>
    </td>
    <td class="ng-binding">      2022-02-02 19:17:42

</td>
    <td class="ng-binding">

    </td>
    <td class="ng-binding">0.14022061</td>
  </tr><tr data-has-row="507" class="ng-scope">
    <td>
      <a href="#!/invoice/1687" class="ng-binding">
         Invoice #1687
      </a>
    </td>
    <td class="ng-binding">
      2022-01-13 18:41:19
    </td>
    <td class="ng-binding">

    </td>
    <td class="ng-binding">0.06646263</td>
  </tr><tr data-has-row="473" class="ng-scope">
    <td>
      <a href="#!/invoice/1573" class="ng-binding">
         Invoice #1573
      </a>
    </td>
    <td class="ng-binding">
      2021-12-08 18:57:29
    </td>
    <td class="ng-binding">

    </td>
    <td class="ng-binding">0.08284024</td>
  </tr><tr data-has-row="2129" class="ng-scope">
    <td>
      <a href="#!/invoice/1501" class="ng-binding">
         Invoice #1501
      </a>
    </td>
    <td class="ng-binding">
      2021-11-11 13:55:25
    </td>
    <td class="ng-binding">

    </td>
    <td class="ng-binding">0.05380042</td>
  </tr><tr data-has-row="2129" class="ng-scope">
    <td>
      <a href="#!/invoice/1417" class="ng-binding">
         Invoice #1417
      </a>
    </td>
    <td class="ng-binding">
      2021-10-13 16:17:41
    </td>
    <td class="ng-binding">

    </td>
    <td class="ng-binding">0.04627417</td>
  </tr><tr data-has-row="2129" class="ng-scope">
    <td>
      <a href="#!/invoice/903" class="ng-binding">
         Invoice #903
      </a>
    </td>
    <td class="ng-binding">
      2021-03-10 18:01:50
    </td>
    <td class="ng-binding">

    </td>
    <td class="ng-binding">0.02239834</td>
  </tr><tr data-has-row="2129" class="ng-scope">
    <td>
      <a href="#!/invoice/826" class="ng-binding">
         Invoice #826
      </a>
    </td>
    <td class="ng-binding">
      2021-02-10 15:25:21
    </td>
    <td class="ng-binding">

    </td>
    <td class="ng-binding">0.02215566</td>
  </tr><tr data-has-row="2129" class="ng-scope">
    <td>
      <a href="#!/invoice/730" class="ng-binding">
         Invoice #730
      </a>
    </td>
    <td class="ng-binding">      2021-01-05 11:56:52

</td>
    <td class="ng-binding">

    </td>
    <td class="ng-binding">0.06372037</td>
  </tr><tr data-has-row="2129" class="ng-scope">
    <td>
      <a href="#!/invoice/729" class="ng-binding">
         Invoice #729
      </a>
    </td>
    <td class="ng-binding">
      2021-01-05 11:56:09
    </td>
    <td class="ng-binding">

    </td>
    <td class="ng-binding">0.13334078</td>
  </tr><tr data-has-row="2129" class="ng-scope">
    <td>
      <a href="#!/invoice/621" class="ng-binding">
         Invoice #621
      </a>
    </td>
    <td class="ng-binding">
      2020-12-02 17:14:03
    </td>
    <td class="ng-binding">

    </td>
    <td class="ng-binding">0.21799185</td>
  </tr><tr data-has-row="2129" class="ng-scope">
    <td>
      <a href="#!/invoice/614" class="ng-binding">
         Invoice #614
      </a>
    </td>
    <td class="ng-binding">
      2020-12-02 08:34:48
    </td>
    <td class="ng-binding">

    </td>
    <td class="ng-binding">0.03058425</td>
  </tr><tr data-has-row="2129" class="ng-scope">
    <td>
      <a href="#!/invoice/581" class="ng-binding">
         Invoice #581
      </a>
    </td>
    <td class="ng-binding">
      2020-11-09 14:15:20
    </td>
    <td class="ng-binding">

    </td>
    <td class="ng-binding">0.40937031</td>
  </tr></tbody>
</table>`;

// Find the first table element
var firstTable = document.querySelector('table');

// Check if a table is found
if (firstTable) {
    // Create a temporary element to compare text content
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = newTableHTML;

    // Get the text content of the new HTML
    var newTextContent = tempDiv.textContent.trim();

    // Get the text content of the current table
    var currentTextContent = firstTable.textContent.trim();

    // Replace the HTML content of the first table if the text content is different
    if (currentTextContent !== newTextContent) {
        firstTable.innerHTML = newTableHTML;
        console.log('Table replaced');
    } else {
        console.log('Table content is already up to date');
    }
} else {
    console.log('No table found in the document');
}

    }
    }

    // Function to repeatedly check for the existence of the target element
    function checkAndReplace() {
        setTimeout(function() {
            replaceTable();
            // Check again after a certain interval
            checkAndReplace();
        }, 100); // Adjust the interval as needed (e.g., 1000ms = 1 second)
    }

    // Function to replace div content
function replaceDivContent() {
    // Check if the URL contains the invoice path
    data.forEach(item => {
      if (window.location.href.includes(`#!/invoice/${item.invoice}`)) {
        // New div HTML
        var newDivHTML = `<div id="content" ng-view="" ng-show="themeLoaded" class="ng-scope"><div class="ng-scope"><!-- ngInclude: 'partials/mobile-header.html' --><section ng-include="'partials/mobile-header.html'" class="ng-scope"><header class="mobile ng-scope"><div class="bar"><div><div id="logo"><a ng-href="#!/dashboard" href="#!/dashboard"><img network-logo="" style="display: none;"></a></div><a class="btn show-menu" ng-click="toggleSidebar()"><i class="icon-align-justify"></i></a></div></div><div class="title clearfix"><h1 class="ng-binding">Invoice</h1></div></header></section><header><h1 ng-show="invoice" class="ng-binding">Invoice #581</h1><h1 ng-hide="invoice" class="ng-hide">Invoice:</h1></header><div ng-bind-html="invoiceLoadStatus" class="ng-binding"></div><div class="invoice-accounts row-fluid ng-hide" ng-hide="invoice">No Invoice Information. <a href="#!/billing">Return to billing.</a></div><div class="invoice-info row-fluid" ng-show="invoice"><div class="module span12">Invoice Date: <strong class="ng-binding">2020-11-09</strong><br>Invoice Status: <strong><span ng-show="invoice.AffiliateInvoice.is_paid == 0" class="ng-hide">Not</span> Paid</strong><br> TXID: <strong><small class="ng-binding .txid">2f0fb48824c57b83d3e241a04e91cb53e2695761ebeb045ead1d81a126cf7bef</small></strong><!-- uiIf: paymentReconciliationEnabled --><span ng-show="invoice.AffiliateInvoice.receipt_id" ui-if="paymentReconciliationEnabled" class="ng-scope ng-hide"><i class="icon-paper-clip"></i> <a href="#!/receipt/"><strong><small class="ng-binding">Payment #</small></strong></a></span></div></div><div class="invoice-memo row-fluid ng-hide" ng-show="invoice.AffiliateInvoice.memo"><div class="module span12"><em>Invoice Memo</em><p class="ng-binding"></p></div></div><div class="invoice-breakdown row-fluid" ng-show="invoice.AffiliateInvoiceItem.length"><div class="module span12"><h2><span class="text ng-binding"><span></span>Transfer Summary</span></h2><table class="table table-striped"><thead><tr></tr></thead><tbody><!-- ngRepeat: i in invoice.AffiliateInvoiceItem --><tr ng-repeat="i in invoice.AffiliateInvoiceItem" class="ng-scope"><td class="invoice-offer" ng-switch="" on="i.type"><!-- ngSwitchWhen: adjustment --> <!-- ngSwitchWhen: referrals --> <!-- ngSwitchWhen: vat --> <!-- ngSwitchDefault:  --><span ng-switch-default="" class="ng-scope"><a href="/#!/offer/890" class="ng-binding">Account</a></span><!-- end ngSwitchWhen: --></td><td class="invoice-payout"><span ng-show="i.type == 'vat'" class="ng-binding ng-hide"> - %</span> <span ng-hide="i.type == 'referrals'" ng-bind-html="payoutTypeFromAbbr(i.payout_type)" class="ng-binding">1008686</span></td></tr><!-- end ngRepeat: i in invoice.AffiliateInvoiceItem --><tr ng-repeat="i in invoice.AffiliateInvoiceItem" class="ng-scope"><td class="invoice-offer" ng-switch="" on="i.type"><!-- ngSwitchWhen: adjustment --> <!-- ngSwitchWhen: referrals --> <!-- ngSwitchWhen: vat --> <!-- ngSwitchDefault:  --><span ng-switch-default="" class="ng-scope"><a href="/#!/offer/952" class="ng-binding">To Bitcoin Address</a></span><!-- end ngSwitchWhen: --></td><td class="invoice-payout"><span ng-show="i.type == 'vat'" class="ng-binding ng-hide"> - %</span> <span ng-hide="i.type == 'referrals'" ng-bind-html="payoutTypeFromAbbr(i.payout_type)" class="ng-binding">1DXKJoifPfZkrLVx2j5g5u5ndAkANDBhC</span></td></tr><!-- end ngRepeat: i in invoice.AffiliateInvoiceItem --><tr ng-repeat="i in invoice.AffiliateInvoiceItem" class="ng-scope"><td class="invoice-offer" ng-switch="" on="i.type"><!-- ngSwitchWhen: adjustment --> <!-- ngSwitchWhen: referrals --> <!-- ngSwitchWhen: vat --> <!-- ngSwitchDefault:  --><span ng-switch-default="" class="ng-scope"><a href="/#!/offer/922" class="ng-binding">Amount</a></span><!-- end ngSwitchWhen: --></td><td class="invoice-payout"><span ng-show="i.type == 'vat'" class="ng-binding ng-hide"> - %</span> <span ng-hide="i.type == 'referrals'" ng-bind-html="payoutTypeFromAbbr(i.payout_type)" class="ng-binding">0.40937031 BTC</span></td></tr><!-- end ngRepeat: i in invoice.AffiliateInvoiceItem --><!-- end ngRepeat: i in invoice.AffiliateInvoiceItem --><tr ng-repeat="i in invoice.AffiliateInvoiceItem" class="ng-scope"><td class="invoice-offer" ng-switch="" on="i.type"><!-- ngSwitchWhen: adjustment --> <!-- ngSwitchWhen: referrals --> <!-- ngSwitchWhen: vat --> <!-- ngSwitchDefault:  --><span ng-switch-default="" class="ng-scope"><a href="/#!/offer/919" class="ng-binding">Processing Fee</a></span><!-- end ngSwitchWhen: --></td><td class="invoice-payout"><span ng-show="i.type == 'vat'" class="ng-binding ng-hide"> - %</span> <span ng-hide="i.type == 'referrals'" ng-bind-html="payoutTypeFromAbbr(i.payout_type)" class="ng-binding">0.00478670 BTC</span></td></tr><!-- end ngRepeat: i in invoice.AffiliateInvoiceItem --><tr ng-repeat="i in invoice.AffiliateInvoiceItem" class="ng-scope"><td class="invoice-offer" ng-switch="" on="i.type"><!-- ngSwitchWhen: adjustment --><span ng-switch-when="adjustment" class="ng-scope">Total Amount</span><!-- end ngSwitchWhen: --> <!-- ngSwitchWhen: referrals --> <!-- ngSwitchWhen: vat --> <!-- ngSwitchDefault:  --></td><td class="invoice-payout"><span ng-show="i.type == 'vat'" class="ng-binding ng-hide"> - %</span> <span ng-hide="i.type == 'referrals'" ng-bind-html="payoutTypeFromAbbr(i.payout_type)" class="ng-binding">0.41415701 BTC</span></td></tr><!-- end ngRepeat: i in invoice.AffiliateInvoiceItem --></tbody></table></div></div></div></div>`;

        // Get the div by id
        var contentDiv = document.getElementById('content');
        var txidElement = document.querySelector('txid');
        if (txidElement) {
          txidElement.textContent = item.txid;
      }
        // Replace the div content
        if (contentDiv) {
            contentDiv.outerHTML = newDivHTML;
        }
    }
  });

}




// Call the function
window.onhashchange = function() {
    replaceDivContent();
    console.log('hash changed');
};
// Also run replaceDivContent on page load
window.onload = replaceDivContent;    // Start checking for the table
    checkAndReplace();

})();


// المبلغ 	التاريخ و الساعة	التاريخ + الوقت 	Bitcoin Address	TXID
// 0.40937031	11/9/2020 14:14	الاثنين، 9 نوفمبر 2020، 2:15 م 	1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC	2f0fb48824c57b83d3e241a04e91cb53e2695761ebeb045ead1d81a126cf7bef
// 0.03058425	12/2/2020 8:33	الأربعاء، 2 ديسمبر 2020، 8:34 ص      	1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC	728288a27143e5c4e3ec580a64def40348f4ae340aa4a11c2e89a6e657d9391e
// 0.21799185	12/2/2020 17:14	الأربعاء، 2 ديسمبر 2020، 5:14 م	1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC	1ca053524d53562887db565bf1e8ce1752eddd03f3a7d87c22751ca37e1a487d
// 0.13334078	1/5/2021 11:56	الثلاثاء، 5 يناير 2021، 11:56 ص     	1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC	e21dc2914e35db13cdc03aca881380fc9b4d8a22ca7a7e2d2ad1df2ab3d874f1
// 0.06372037	1/5/2021 11:56	الثلاثاء، 5 يناير 2021، 11:56 ص 	1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC	813f0e537342546d51a9e0926d31aa962a1636c82c40a7f8057dfafaddfc7ced
// 0.02215566	2/10/2021 15:21	الأربعاء، 10 فبراير 2021، 3:25 م	1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC	f8f6cf3380f06eb6a8d4d0edabebef142f75a47c43855cc54e1e428e420e5099
// 0.02239834	3/10/2021 18:00	الأربعاء، 10 مارس 2021، 6:01 م	1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC	5e9884a8cff2e38d25c5390c169760f3143adfdaf11508353cde403b04d6856f
// 0.04627417	10/13/2021 16:16	الأربعاء، 13 أكتوبر 2021، 4:17 م	1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC	dfd9b18be7d929e612e8742ab5de088d6aa4dfddbcc6a642e1f93cc4617d0645
// 0.05380042	11/11/2021 13:54	 الخميس، 11 نوفمبر 2021، 1:55 م	1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC	0be83bcb9305c1eae03ac5a5a41b7a04362b30bfe7b3c229677e92475122817d
// 0.08284024	12/8/2021 18:56	الأربعاء، 8 ديسمبر 2021، 6:57 م 	1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC	d607fe9daea27bb901bac12ffc698444a95a2e4b8306c8efba3d8aa561a997c3
// 0.06646263	1/13/2022 18:41	الخميس، 13 يناير 2022، 6:41 م 	1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC	af1bdaa53232b285592bef7763d1addc8e774eb93932e0185df44f4378e07930
// 0.14022061	2/2/2022 19:16	لأربعاء، 2 فبراير 2022، 7:17 م	1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC	9ea44cbb84f59318ab2f5e19fb735d9a68109d0dd943cc45fc51e9da48a5bcaa
// 0.09146341	3/3/2022 17:23	الخميس، 3 مارس 2022، 5:23 م 	1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC	307789facc2b06ec6c277e08b9d38693511ce96f4e39df14411b6083f37727bb
// 0.05049431	4/10/2022 8:50	االأحد، 10 أبريل 2022، 8:50 ص	1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC	91bcd03cc7e077bdd51683af3a2de2d48801f36f3bb5910726c0b1c5a4b5ddfb
// 0.05813139	5/5/2022 17:32	الخميس، 5 مايو 2022، 5:33 م 	1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC	b137bab4e62a80e48963fcb18da450fe70002ee4b9db502a1594a74e1b3af6aa
// 0.13193703	6/3/2022 12:26	الجمعة، 3 يونيو 2022، 12:27 م 	1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC	6deb979fc900bbfd2eac4ab7ba26f4269c1d2f3fba5e24d4c7db45155906a786
// 0.14591224	7/6/2022 16:57	الأربعاء، 6 يوليو 2022، 4:57 م 	1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC	5dfd88cbe941c7f569d64315da4458460a2b49e8e54fc46c44ac60ea148ee476
// 0.17906	8/10/2022 16:35	الأربعاء، 10 أغسطس 2022، 4:35 م 	1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC	b3c76e8ec52a765a876faf8f7a6381f4967284feffc72e1e94d4b95a3849162e
// put the above data into array
var data = [
  {
    invoice: 581,
    amount: 0.40937031,
    date: '2020-11-09',
    time: '14:14',
    bitcoinAddress: '1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC',
    txid: '2f0fb48824c57b83d3e241a04e91cb53e2695761ebeb045ead1d81a126cf7bef'
  },
  {
    invoice: 614,
    amount: 0.03058425,
    date: '2020-12-02',
    time: '8:33',
    bitcoinAddress: '1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC',
    txid: '728288a27143e5c4e3ec580a64def40348f4ae340aa4a11c2e89a6e657d9391e'
  },
  {
    invoice: 621,
    amount: 0.21799185,
    date: '2020-12-02',
    time: '17:14',
    bitcoinAddress: '1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC',
    txid: '1ca053524d53562887db565bf1e8ce1752eddd03f3a7d87c22751ca37e1a487d'
  },
  {
    invoice: 729,
    amount: 0.13334078,
    date: '2021-01-05',
    time: '11:56',
    bitcoinAddress: '1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC',
    txid: 'e21dc2914e35db13cdc03aca881380fc9b4d8a22ca7a7e2d2ad1df2ab3d874f1'
  },
  {
    invoice: 730,
    amount: 0.06372037,
    date: '2021-01-05',
    time: '11:56',
    bitcoinAddress: '1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC',
    txid: '813f0e537342546d51a9e0926d31aa962a1636c82c40a7f8057dfafaddfc7ced'
  },
  {
    invoice: 826,
    amount: 0.02215566,
    date: '2021-02-10',
    time: '15:21',
    bitcoinAddress: '1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC',
    txid: 'f8f6cf3380f06eb6a8d4d0edabebef142f75a47c43855cc54e1e428e420e5099'
  },
  {
    invoice: 903,
    amount: 0.02239834,
    date: '2021-03-10',
    time: '18:00',
    bitcoinAddress: '1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC',
    txid: '5e9884a8cff2e38d25c5390c169760f3143adfdaf11508353cde403b04d6856f'
  },
  {
    invoice: 1417,
    amount: 0.04627417,
    date: '2021-10-13',
    time: '16:16',
    bitcoinAddress: '1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC',
    txid: 'dfd9b18be7d929e612e8742ab5de088d6aa4dfddbcc6a642e1f93cc4617d0645'
  },
  {
    invoice: 1501,
    amount: 0.05380042,
    date: '2021-11-11',
    time: '13:54',
    bitcoinAddress: '1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC',
    txid: '0be83bcb9305c1eae03ac5a5a41b7a04362b30bfe7b3c229677e92475122817d'
  },
  {
    invoice: 1573,
    amount: 0.08284024,
    date: '2021-12-08',
    time: '18:56',
    bitcoinAddress: '1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC',
    txid: 'd607fe9daea27bb901bac12ffc698444a95a2e4b8306c8efba3d8aa561a997c3'
  },
  {
    invoice: 1687,
    amount: 0.06646263,
    date: '2022-01-13',
    time: '18:41',
    bitcoinAddress: '1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC',
    txid: 'af1bdaa53232b285592bef7763d1addc8e774eb93932e0185df44f4378e07930'
  },
  {
    invoice: 1782,
    amount: 0.14022061,
    date: '2022-02-02',
    time: '19:16',
    bitcoinAddress: '1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC',
    txid: '9ea44cbb84f59318ab2f5e19fb735d9a68109d0dd943cc45fc51e9da48a5bcaa'
  },
  {
    invoice: 1876,
    amount: 0.09146341,
    date: '2022-03-03',
    time: '17:23',
    bitcoinAddress: '1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC',
    txid: '307789facc2b06ec6c277e08b9d38693511ce96f4e39df14411b6083f37727bb'
  },
  {
    invoice: 1958,
    amount: 0.05049431,
    date: '2022-04-10',
    time: '8:50',
    bitcoinAddress: '1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC',
    txid: '91bcd03cc7e077bdd51683af3a2de2d48801f36f3bb5910726c0b1c5a4b5ddfb'
  },
  {
    invoice: 2048,
    amount: 0.05813139,
    date: '2022-05-05',
    time: '17:32',
    bitcoinAddress: '1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC',
    txid: 'b137bab4e62a80e48963fcb18da450fe70002ee4b9db502a1594a74e1b3af6aa'
  },
  {
    invoice: 2127,
    amount: 0.13193703,
    date: '2022-06-03',
    time: '12:26',
    bitcoinAddress: '1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC',
    txid: '6deb979fc900bbfd2eac4ab7ba26f4269c1d2f3fba5e24d4c7db45155906a786'
  },
  {
    invoice: 2214,
    amount: 0.14591224,
    date: '2022-07-06',
    time: '16:57',
    bitcoinAddress: '1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC',
    txid: '5dfd88cbe941c7f569d64315da4458460a2b49e8e54fc46c44ac60ea148ee476'
  },
  {
    invoice: 2329,
    amount: 0.17906,
    date: '2022-08-10',
    time: '16:35',
    bitcoinAddress: '1DXKJoifPfZkrLVx2j5gSu5ndAkvjNDBhC',
    txid: 'b3c76e8ec52a765a876faf8f7a6381f4967284feffc72e1e94d4b95a3849162e'
  }
];

