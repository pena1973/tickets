import "./variantsContent.css";

export interface VariantsContentProps {
}

export const VariantsContent = ({
}: VariantsContentProps) => {

  // private onClick = (e: React.MouseEvent<HTMLInputElement>) => {
  //   let button = e.target as HTMLInputElement;
  // }

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {

    let div = e.target as HTMLDivElement;
    let parent = div.parentElement;

    for (let index = 0; index < 3; index++) {
      const child = parent?.children[index];
      child?.classList.remove('active');
    }

    switch (div.id) {
      case 'chip':
        div.classList.add("active");
        break;
      case 'fast':
        div.classList.add("active");
        break;
      case 'optim':
        div.classList.add("active")
        break;
      default:
    }
    // здесь передать состояние переключателя в редукс

  }
  return (
    <div className="content-panel-variants">
      <div id="chip" className="content-panel-variant radius-left" onClick={(e) => handleClick(e)}> Самый дешевый </div>
      <div id="fast" className="content-panel-variant" onClick={handleClick}>Самый быстрый</div>
      <div id="optim" className="content-panel-variant radius-right" onClick={handleClick}> Самый оптимальный </div>
    </div>
  );
}

