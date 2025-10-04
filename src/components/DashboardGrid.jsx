import { View, Button, Container } from 'reshaped';
import StockCard from './StockCard';

function DashboardGrid({ stocks, onRefresh, isLoading }) {
  return (
    <Container width="100%" maxWidth={1200}>
      <View padding={6} gap={6}>
        {/* Refresh Button */}
        <View direction="row" justify="center">
          <Button
            variant="solid"
            color="primary"
            size="large"
            onClick={onRefresh}
            disabled={isLoading}
          >
            {isLoading ? 'Refreshing...' : 'Refresh Data'}
          </Button>
        </View>

        {/* Stock Cards Grid - Fixed 3 columns layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
          }}
        >
          {stocks.map((stock) => (
            <StockCard key={stock.id} stock={stock} />
          ))}
        </div>
      </View>
    </Container>
  );
}

export default DashboardGrid;
