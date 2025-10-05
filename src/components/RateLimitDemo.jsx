// Rate Limit Demo - Test Alert Component
// This file demonstrates the rate limit alert that will be shown

import { Alert, Button, View, Text } from 'reshaped';

const RateLimitDemo = () => {
  return (
    <View padding={4} gap={4}>
      <Text variant="title-2">Rate Limit Alert Demo</Text>
      
      <Alert
        color="warning"
        title="API Rate Limit Reached"
        icon={() => <Text>⚠️</Text>}
        actionsSlot={
          <Button 
            size="small" 
            variant="ghost" 
            color="warning"
            onClick={() => console.log('Dismissed')}
          >
            Dismiss
          </Button>
        }
      >
        You've reached the Alpha Vantage free tier limit (25 requests/day). 
        The dashboard is now showing realistic demo data that updates with each refresh. 
        Real-time data will be available again tomorrow.
      </Alert>

      <Alert
        color="critical"
        title="Data Loading Error"
        icon={() => <Text>❌</Text>}
        actionsSlot={
          <Button 
            size="small" 
            variant="ghost" 
            color="critical"
            onClick={() => console.log('Dismissed')}
          >
            Dismiss
          </Button>
        }
      >
        Failed to load stock data. Please try again.
      </Alert>

      <Text variant="body-2" color="neutral-faded">
        📊 Showing realistic demo data (API limit reached)
      </Text>
    </View>
  );
};

export default RateLimitDemo;
