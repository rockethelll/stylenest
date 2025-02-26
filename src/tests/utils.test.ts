import { cn } from '../lib/utils';

describe('cn (className utility)', () => {
  it('combines multiple class strings', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('handles conditional classes', () => {
    const isActive = true;
    const isPrimary = false;

    expect(
      cn('base-class', {
        'is-active': isActive,
        'is-primary': isPrimary,
      }),
    ).toBe('base-class is-active');
  });

  it('merges Tailwind classes correctly', () => {
    expect(cn('p-4 text-red-500', 'p-6')).toBe('text-red-500 p-6');
  });

  it('handles array of classes', () => {
    expect(cn(['text-lg', 'font-bold'], 'text-blue-500')).toBe(
      'text-lg font-bold text-blue-500',
    );
  });

  it('handles undefined and null values', () => {
    expect(cn('text-base', undefined, null, 'text-center')).toBe(
      'text-base text-center',
    );
  });

  it('merges complex Tailwind utilities correctly', () => {
    expect(
      cn(
        'flex items-center space-x-2 px-4',
        'md:space-x-4 md:px-6',
        'hover:bg-gray-100',
      ),
    ).toBe(
      'flex items-center space-x-2 px-4 md:space-x-4 md:px-6 hover:bg-gray-100',
    );
  });

  it('handles conflicting Tailwind classes', () => {
    expect(cn('text-sm text-gray-500', 'text-lg text-blue-500')).toBe(
      'text-lg text-blue-500',
    );
  });

  it('preserves responsive and state variants order', () => {
    expect(cn('text-sm md:text-base lg:text-lg', 'hover:text-blue-500')).toBe(
      'text-sm md:text-base lg:text-lg hover:text-blue-500',
    );
  });
});
