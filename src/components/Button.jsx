import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// Styles driven by CSS variables defined in index.css
const variantStyles = {
  primary: css`
    color: #fff;
    background: var(--color-primary);
    box-shadow: 0 8px 20px -8px var(--color-shadow);
    &:hover { background: var(--color-primary-dark); transform: translateY(-1px); }
    &:active { transform: translateY(0); }
    &:focus-visible { box-shadow: 0 0 0 3px var(--color-shadow); }
  `,
  secondary: css`
    color: var(--color-text-light);
    background: var(--color-surface-light);
    border: 1px solid var(--color-border-light);
    &:hover { border-color: var(--color-primary); color: var(--color-primary); }
    .dark & { color: var(--color-text-dark); background: var(--color-surface-dark); border-color: var(--color-border-dark); }
  `,
  danger: css`
    color: #fff;
    background: #ef4444; /* red-500 */
    &:hover { background: #dc2626; }
  `,
  success: css`
    color: #fff;
    background: #10b981; /* emerald-500 */
    &:hover { background: #059669; }
  `,
  warning: css`
    color: #111827;
    background: #f59e0b; /* amber-500 */
    &:hover { background: #d97706; color: #111827; }
  `,
};

const sizeStyles = {
  sm: css` font-size: 0.875rem; padding: 0.5rem 0.75rem; `,
  md: css` font-size: 1rem; padding: 0.65rem 1rem; `,
  lg: css` font-size: 1.125rem; padding: 0.85rem 1.25rem; `,
};

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: 0.2px;
  transition: all var(--transition-fast);
  cursor: pointer;
  text-decoration: none;

  ${(p) => sizeStyles[p.size || 'md']}
  ${(p) => variantStyles[p.variant || 'primary']}

  ${(p) => p.disabled && css`
    opacity: 0.6;
    cursor: not-allowed;
    filter: grayscale(10%);
  `}
`;

const Button = ({ variant = 'primary', size = 'md', disabled = false, onClick, children, className = '', ...rest }) => (
  <StyledButton variant={variant} size={size} disabled={disabled} onClick={onClick} className={className} {...rest}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success', 'warning']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;