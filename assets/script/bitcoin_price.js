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
      // Extract Bitcoin price
      const bitcoinPriceElement = document.getElementById("bitcoin-price");
      const bitcoinPrice = data.market_data.current_price.usd;
      bitcoinPriceElement.textContent = `$${numberWithCommas(bitcoinPrice)}`;

      // Extract Bitcoin market cap
      const bitcoinMarketCapElement = document.getElementById("bitcoin-market-cap");
      const bitcoinMarketCap = data.market_data.market_cap.usd;
      bitcoinMarketCapElement.textContent = `$${numberWithCommas(bitcoinMarketCap)}`;

      // Extract 24-hour percentage change
      const bitcoin24hChangeElement = document.getElementById("bitcoin-24h-change");
      const bitcoin24hChange = data.market_data.price_change_percentage_24h;
      bitcoin24hChangeElement.textContent = `${bitcoin24hChange.toFixed(2)}%`;
    })
    .catch(error => {
      console.error("Error fetching Bitcoin data:", error);
    });
});
