import { render, screen, cleanup, queryByTestId } from '@testing-library/react'
import '@testing-library/jest-dom';
import * as React from 'react';
import Buttons from '../Buttons';

afterAll(() => {
    cleanup();
    jest.clearAllMocks();
});

it("Buttons render properly", () => {
    render(<Buttons />);
    const shuffleButton = screen.getByTestId("btn-shuffle");
    const drawButton = screen.getByTestId("btn-draw");
    const resetButton = screen.getByTestId("btn-reset");

    expect(shuffleButton).toBeInTheDocument();
    expect(drawButton).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
});

it("0 cards disables the buttons", () => {
    render(<Buttons />);
    const shuffleButton = screen.getByTestId("btn-shuffle");
    const drawButton = screen.getByTestId("btn-draw");
    const resetButton = screen.getByTestId("btn-reset");

    expect(shuffleButton).toBeDisabled();
    expect(drawButton).toBeDisabled();
    expect(resetButton).toBeInTheDocument();
});

it("Enabled Buttons", () => {
    render(<Buttons cardsremaninig={5} />);
    const shuffleButton = screen.getByTestId("btn-shuffle");
    const drawButton = screen.getByTestId("btn-draw");
    const resetButton = screen.getByTestId("btn-reset");

    expect(shuffleButton).toBeEnabled();
    expect(drawButton).toBeEnabled();
    expect(resetButton).toBeInTheDocument();
});