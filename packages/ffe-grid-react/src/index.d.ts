import * as React from 'react';

export interface GridProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    condensed?: boolean;
    element?: string;
    topPadding?: boolean;
}

export interface InlineGridProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    element?: string;
}

type backgroundColors =
    | 'blue-ice'
    | 'blue-pale'
    | 'green-mint'
    | 'grey-cloud'
    | 'sand'
    | 'grey-warm'
    | 'orange-salmon'
    | 'red'
    | 'blue-sky';

export interface GridRowProps extends React.HTMLAttributes<HTMLElement> {
    background?: backgroundColors;
    children: React.ReactNode;
    className?: string;
    element?: string;
    reverse?: boolean;
    topPadding?: boolean;
}

type columnsRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridColSize {
    cols: columnsRange | string;
    offset: columnsRange | string;
}

export interface GridColProps extends React.HTMLAttributes<HTMLElement> {
    background?: backgroundColors;
    children: React.ReactNode;
    className?: string;
    element?: React.ReactNode;
    around?: boolean;
    between?: boolean;
    bottom?: boolean;
    center?: boolean;
    centerText?: boolean;
    end?: boolean;
    horizontal?: boolean;
    middle?: boolean;
    bottomPadding?: boolean;
    reverse?: boolean;
    start?: boolean;
    top?: boolean;
    sm?: columnsRange | string | GridColSize;
    md?: columnsRange | string | GridColSize;
    lg?: columnsRange | string | GridColSize;
}

declare class Grid extends React.Component<GridProps, any> {}
declare class InlineGrid extends React.Component<InlineGridProps, any> {}
declare class GridRow extends React.Component<GridRowProps, any> {}
declare class GridCol extends React.Component<GridColProps, any> {}
