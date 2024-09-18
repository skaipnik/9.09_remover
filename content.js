function removeNotionBanner() {
  const darkSelector = 'div[style*="background-color: rgb(55, 44, 28)"]';
  const lightSelector = 'div[style*="background-color: rgb(251, 245, 228)"]';
  
  const banner = document.querySelector(darkSelector) || document.querySelector(lightSelector);
  
  if (banner && (banner.textContent.includes("Due to U.S. sanctions") || 
                 banner.textContent.includes("users in Russia will not be able to access Notion"))) {
    banner.remove();
  }
}

removeNotionBanner();

const observer = new MutationObserver(removeNotionBanner);
observer.observe(document.body, { childList: true, subtree: true });

setTimeout(removeNotionBanner, 1000);
setTimeout(removeNotionBanner, 3000);