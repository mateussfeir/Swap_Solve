document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded event fired."); // Check if this message appears in the console
    
    // Function to format numbers with commas
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // Fetch Bitcoin data from CoinGecko API
    fetch("https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false")
      .then(response => response.json())
      .then(data => {
        // Extract Bitcoin price and market cap
        const bitcoinPriceElement = document.getElementById("bitcoin-price");
        const bitcoinPrice = data.market_data.current_price.usd;
        bitcoinPriceElement.textContent = `$${numberWithCommas(bitcoinPrice)}`;

        const bitcoinMarketCapElement = document.getElementById("bitcoin-market-cap");
        const bitcoinMarketCap = data.market_data.market_cap.usd;
        bitcoinMarketCapElement.textContent = `$${numberWithCommas(bitcoinMarketCap)}`;
      })
      .catch(error => {
        console.error("Error fetching Bitcoin data:", error);
      });
});
