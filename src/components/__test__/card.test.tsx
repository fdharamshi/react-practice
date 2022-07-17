import { render, screen, cleanup, queryByTestId } from '@testing-library/react'
import '@testing-library/jest-dom';
import * as React from 'react';
import Card from '../Card';

afterEach(() => {
        cleanup();
        jest.clearAllMocks();
});

it("Renders without crashing", () => {
        const selectedCard = { "suit": "diamond", "value": 2 };
        render(<Card selected={selectedCard} />);
        const cardWrapper = screen.getByTestId("card-wrapper");
        expect(cardWrapper).toBeInTheDocument();
});

it("Renders correct diamonds image", () => {
        const selectedCard = { "suit": "diamond", "value": 2 };
        const { unmount } = render(<Card selected={selectedCard} />);
        const cardWrapper = screen.getByTestId("card-suit");
        expect(cardWrapper).toHaveAttribute("src", "diamond.png");
        unmount();
});

it("Renders correct spades image", () => {
        const selectedCard = { "suit": "spade", "value": 2 };
        const { unmount } = render(<Card selected={selectedCard} />);
        const cardWrapper = screen.getByTestId("card-suit");
        expect(cardWrapper).toHaveAttribute("src", "spade.png");
        unmount();
});

it("Renders correct hearts image", () => {
        const selectedCard = { "suit": "heart", "value": 2 };
        const { unmount } = render(<Card selected={selectedCard} />);
        const cardWrapper = screen.getByTestId("card-suit");
        expect(cardWrapper).toHaveAttribute("src", "heart.png");
        unmount();
});

it("Renders correct clubs image", () => {
        const selectedCard = { "suit": "club", "value": 2 };
        const { unmount } = render(<Card selected={selectedCard} />);
        const cardWrapper = screen.getByTestId("card-suit");
        expect(cardWrapper).toHaveAttribute("src", "clubs.png");
        unmount();
});

it("Renders correct Ace value", () => {
        const selectedCard = { "suit": "club", "value": 1 };
        const { unmount } = render(<Card selected={selectedCard} />);
        const cardWrapper = screen.getByTestId("card-value");
        expect(cardWrapper).toContainHTML("A");
        unmount();
});

it("Renders correct Jack value", () => {
        const selectedCard = { "suit": "club", "value": 11 };
        const { unmount } = render(<Card selected={selectedCard} />);
        const cardWrapper = screen.getByTestId("card-value");
        expect(cardWrapper).toContainHTML("J");
        unmount();
});

it("Renders correct Queen value", () => {
        const selectedCard = { "suit": "club", "value": 12 };
        const { unmount } = render(<Card selected={selectedCard} />);
        const cardWrapper = screen.getByTestId("card-value");
        expect(cardWrapper).toContainHTML("Q");
        unmount();
});

it("Renders correct King value", () => {
        const selectedCard = { "suit": "club", "value": 13 };
        const { unmount } = render(<Card selected={selectedCard} />);
        const cardWrapper = screen.getByTestId("card-value");
        expect(cardWrapper).toContainHTML("K");
        unmount();
});

it("Check blank prop", () => {
        const selectedCard = null;
        const { unmount } = render(<Card selected={selectedCard} />);
        expect(queryByTestId(document.body, /card-wrapper/i)).toBeNull();
        unmount();
})

it("Check not blank prop", () => {
        const selectedCard = { "suit": "club", "value": 13 };
        const { unmount } = render(<Card selected={selectedCard} />);
        expect(queryByTestId(document.body, /card-wrapper/i)).not.toBeNull();
        unmount();
})