import styled from '@bean-ui/styled-engine';
import { LoadingProps } from './Loader';

export const LoaderContent = styled.div<Pick<LoadingProps, 'margin' | 'padding'>>`
  ${({ margin }) => `margin: ${margin || '0 auto'};`}
  ${({ padding }) => `padding: ${padding || '0'};`}
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
