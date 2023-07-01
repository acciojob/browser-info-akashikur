//your JS code here. If required.
function displayBrowserInfo() {
  const browserInfoDiv = document.getElementById('browser-info');
  const browserName = getBrowserName();
  const version = getBrowserVersion();

  const browserInfo = `You are using ${browserName} version ${version}`;
  browserInfoDiv.textContent = browserInfo;
}

function getBrowserName() {
  const userAgent = navigator.userAgent;

  if (userAgent.includes('Firefox')) {
    return 'Firefox';
  } else if (userAgent.includes('Chrome')) {
    return 'Chrome';
  } else if (userAgent.includes('Safari')) {
    return 'Safari';
  } else if (userAgent.includes('Edge')) {
    return 'Edge';
  } else if (userAgent.includes('Opera')) {
    return 'Opera';
  } else if (userAgent.includes('Trident') || userAgent.includes('MSIE')) {
    return 'Internet Explorer';
  } else {
    return 'Unknown';
  }
}

function getBrowserVersion() {
  const userAgent = navigator.userAgent;
  const matches = userAgent.match(/(Firefox|Chrome|Safari|Edge|Opera|Trident|MSIE)\/?\s*(\d+)/);

  if (matches && matches.length === 3) {
    return matches[2];
  } else {
    return 'Unknown';
  }
}

// Call the function to display the browser information
displayBrowserInfo();
