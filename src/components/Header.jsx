import { View, Text, Container } from 'reshaped';
import ThemeToggle from './ThemeToggle';

function Header({ lastUpdated }) {
  return (
    <View as="header" padding={6} borderColor="neutral-faded" borderPosition="bottom">
      <Container width="100%" maxWidth={1200}>
        <View direction="row" justify="space-between" align="center">
          <View>
            <Text variant="display-2" weight="bold" color="neutral">
              Top 30 Tech Stocks
            </Text>
            <Text variant="body-2" color="neutral-faded">
              Real-time technology stock market dashboard
            </Text>
          </View>
          
          <View direction="row" align="center" gap={4}>
            {lastUpdated && (
              <View align="end">
                <Text variant="caption-1" color="neutral-faded">
                  Last Updated
                </Text>
                <Text variant="body-3" color="neutral">
                  {lastUpdated}
                </Text>
              </View>
            )}
            <ThemeToggle />
          </View>
        </View>
      </Container>
    </View>
  );
}

export default Header;
