import { View, Text, Card } from 'reshaped';

function StockCard({ stock }) {
  const { ticker, companyName, price, change } = stock;
  const isPositive = change.amount >= 0;
  const changeColor = isPositive ? 'positive' : 'critical';

  return (
    <Card 
      padding={6} 
      borderRadius="large" 
      elevated
      height="100%"
    >
      <View gap={4} height="100%" justify="space-between">
        {/* Company Header */}
        <View gap={1}>
          <Text variant="title-2" weight="bold" color="neutral">
            {ticker}
          </Text>
          <Text variant="body-2" color="neutral-faded">
            {companyName}
          </Text>
        </View>

        {/* Price Information */}
        <View gap={3}>
          <Text variant="display-4" weight="bold" color="neutral">
            ${price.toFixed(2)}
          </Text>
          
          <View direction="row" align="center" gap={2}>
            <Text variant="title-4" color={changeColor}>
              {isPositive ? '↗' : '↘'}
            </Text>
            <View gap={1}>
              <Text variant="body-1" color={changeColor} weight="medium">
                {isPositive ? '+' : ''}${change.amount.toFixed(2)}
              </Text>
              <Text variant="body-2" color={changeColor}>
                ({isPositive ? '+' : ''}{change.percent.toFixed(2)}%)
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Card>
  );
}

export default StockCard;
