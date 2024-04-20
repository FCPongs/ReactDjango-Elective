import { render, screen } from '@testing-library/react'
import { describe, expect, it } from "vitest";
import Button from '../Components/Button'
import React from 'react';

describe('group', () => {
    it('should be rendered', () => {
        render(<Button buttonText="Click Me"/>)
        
        const button = screen.getByText("Click Me")
                                
        expect(button).toBeInTheDocument()
    })
})