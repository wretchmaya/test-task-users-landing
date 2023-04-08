const getChildNodesMaxHeight = (childNodes: NodeListOf<Node>) => {
    let maxHeight = 0;

    childNodes.forEach(node => {
        if (node instanceof HTMLElement && node.offsetHeight > maxHeight) {
            maxHeight = node.offsetHeight;
        }
    });

    return maxHeight;
};

const applyEqualHeight = (childNodes: NodeListOf<Node>, maxHeight: number) => {
    childNodes.forEach(node => {
        if (node instanceof HTMLElement) {
            node.style.height = `${maxHeight}px`;
        }
    });
};

export const setEqualMaxHeight = (containerRef: React.RefObject<HTMLDivElement>) => {
    const container = containerRef.current;

    if (container) {
        const childNodes = container.childNodes;
        if (childNodes.length > 0) {
            const maxHeight = getChildNodesMaxHeight(childNodes);
            applyEqualHeight(childNodes, maxHeight);
        }
    }
};
