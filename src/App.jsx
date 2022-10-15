import React from 'react';
import TopScreen from "./Components/TopScreen/TopScreen";
import Frame from "./Components/Frame/Frame";
import '@vkontakte/vkui/dist/fonts.css';
import {
    Alert, AppRoot, Cell, CellButton, Epic, Group, ModalPage, ModalPageHeader,
    ModalRoot, Panel,  Placeholder, Snackbar, SplitCol, SplitLayout, Tabbar,
    TabbarItem, useAdaptivity, usePlatform, View, ViewWidth, VKCOM, PanelHeader,
} from "@vkontakte/vkui";
import {Icon28HomeOutline, Icon28TagOutline,Icon28PawOutline } from "@vkontakte/icons";
import {Content} from "./Components/Content";

const App = () => {
    const { viewWidth } = useAdaptivity();
    const platform = usePlatform();
    const hasHeader = platform !== VKCOM;
    const [activeStory, setActiveStory] = React.useState("Shop");
    const onStoryChange = (e) => {
        setActiveStory(e.currentTarget.dataset.story);
    }
    const isDesktop = viewWidth >= ViewWidth.SMALL_TABLET;
    const [popout, setPopout] = React.useState(null);
    const [modal, setModal] = React.useState(null);
    const [snackbar, setSnackbar] = React.useState(null);

    //>>>>>>>>>>>>>>>>>>>>>>>ФУНКЦИИ<<<<<<<<<<<<<<<<<<<<<
    // попап
    const closePopout = () => {
        setPopout(null);
    };
    function limitExceeded (){
        setPopout(
            <Alert
                actions={[
                    {
                        title: "Закрыть",
                        autoclose: true,
                        mode: "destructive",
                    },
                ]}
                actionsLayout="horizontal"
                onClose={closePopout}
                // header="Лимит покупки превышен"
                header="Лимит покупки превышен"
            />
        );
    }

    // Модальное окно
    const modalRoot = (
        <ModalRoot activeModal={modal}>
            <ModalPage
                id="warning"
                onClose={() => setModal(null)}
                header={<ModalPageHeader>По нулям...</ModalPageHeader>}
            >
                <Group>
                    <CellButton onClick={() =>reloadVk()}>Сброс приложения</CellButton>
                </Group>
            </ModalPage>
        </ModalRoot>
    );
    const reloadVk = () => {
        setModal(null)
        location.reload ()
    }
    // функция вызова модального окна
    const modalRootFunc = () => {
        setModal("warning")
    }

    // Всплывающее окно
    const openAction = () => {
        if (snackbar) return;
        setSnackbar(
            <Snackbar
                layout="vertical"
                onClose={() => setSnackbar(null)}
            >
                Слишком высокая активность
            </Snackbar>
        );
    };
//>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<

    return (
        <AppRoot >
            <SplitLayout
                header={hasHeader && <PanelHeader separator={false} />}
                popout={popout}
                modal={modalRoot}
                style={{ justifyContent: "center" }}
            >
                {isDesktop && (
                    <SplitCol fixed width={200} maxWidth={200} >
                        <Panel >
                            {hasHeader && <PanelHeader />}
                            <Group>
                                <Cell
                                    disabled={activeStory === "Home"}
                                    style={
                                        activeStory === "Home"
                                            ? {
                                                backgroundColor:
                                                    "var(--vkui--color_background_secondary)",
                                                borderRadius: 8,
                                            }
                                            : {}
                                    }
                                    data-story="Home"
                                    onClick={onStoryChange}
                                    before={
                                        <TabbarItem
                                            style={{marginRight: "10px"}}
                                            selected={activeStory ===  "Home"}
                                            data-story="Home"
                                        >
                                            <Icon28HomeOutline />
                                        </TabbarItem>
                                    }
                                >
                                    Home
                                </Cell>

                                <Cell
                                    disabled={activeStory === "Paw"}
                                    style={
                                        activeStory === "Paw"
                                            ? {
                                                backgroundColor:
                                                    "var(--vkui--color_background_secondary)",
                                                borderRadius: 8,
                                            }
                                            : {}
                                    }
                                    data-story="Paw"
                                    onClick={onStoryChange}
                                    before={
                                        <TabbarItem
                                            style={{marginRight: "10px"}}
                                            selected={activeStory ===  "Paw"}
                                            data-story="Paw"
                                        >
                                            <Icon28PawOutline />
                                        </TabbarItem>
                                    }
                                >
                                    Paw
                                </Cell>

                                <Cell
                                    disabled={activeStory === "Shop"}
                                    style={
                                        activeStory === "Shop"
                                            ? {
                                                backgroundColor:
                                                    "var(--vkui--color_background_secondary)",
                                                borderRadius: 8,
                                            }
                                            : {}
                                    }
                                    data-story="Shop"
                                    onClick={onStoryChange}
                                    before={
                                        <TabbarItem
                                            style={{marginRight: "10px"}}
                                            selected={activeStory ===  "Shop"}
                                            data-story="Shop"
                                        >
                                            <Icon28TagOutline />
                                        </TabbarItem>
                                    }
                                >
                                    Shop
                                </Cell>
                            </Group>
                        </Panel>
                    </SplitCol>
                )}

                <SplitCol
                    animate={!isDesktop}
                    spaced={isDesktop}
                    width={isDesktop ? "560px" : "100%"}
                    maxWidth={isDesktop ? "560px" : "100%"}
                >
                    <Epic
                        activeStory={activeStory}
                        tabbar={
                            !isDesktop && (
                                <Tabbar >
                                    <TabbarItem
                                        onClick={onStoryChange}
                                        selected={activeStory ===  "Home"}
                                        data-story="Home"
                                    >
                                        <Icon28HomeOutline/>
                                    </TabbarItem>

                                    <TabbarItem
                                        onClick={onStoryChange}
                                        selected={activeStory  === "Paw"}
                                        data-story="Paw"
                                    >
                                        <Icon28PawOutline/>
                                    </TabbarItem>

                                    <TabbarItem
                                        onClick={onStoryChange}
                                        selected={activeStory === "Shop"}
                                        data-story="Shop"
                                    >
                                        <Icon28TagOutline />
                                    </TabbarItem>
                                </Tabbar>
                            )
                        }
                    >
                        <View id="Home" activePanel="Home">
                            <Panel id="Home">
                                <PanelHeader >Home</PanelHeader>
                                <Group style={{ height: "1000px" }}>
                                    <Placeholder>
                                        <Icon28HomeOutline/>
                                    </Placeholder>
                                </Group>
                            </Panel>
                        </View>

                        <View id="Paw" activePanel="Paw">
                            <Panel id="Paw">
                                <PanelHeader >Paw</PanelHeader>
                                <Group style={{ height: "1000px" }}>
                                    <Placeholder>
                                        <Icon28PawOutline/>
                                    </Placeholder>
                                </Group>
                            </Panel>
                        </View>

                        <View id="Shop" activePanel="Shop">

                            <Panel id="Shop">
                                <Content
                                    limitExceeded={limitExceeded}
                                    modalRootFunc={modalRootFunc}
                                    openAction={openAction}
                                />
                                {snackbar}
                            </Panel>
                        </View>
                    </Epic>
                </SplitCol>
            </SplitLayout>
        </AppRoot>

    );
}
export default App;
