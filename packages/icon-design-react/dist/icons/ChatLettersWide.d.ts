import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLettersWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLettersWide: ForwardRefExoticComponent<ChatLettersWideProps & RefAttributes<SVGSVGElement>>;

export default ChatLettersWide;
export { ChatLettersWide };
