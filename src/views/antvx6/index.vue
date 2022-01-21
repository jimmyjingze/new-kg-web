<template>
  <div class="antv-x6">
    <div id="stencil"
         class="stencil"></div>
    <div id="graph-container"
         class="graph-container"></div>
  </div>
</template>

<script>
import { Graph, Shape, Addon } from "@antv/x6";
export default {
  name: "AntvX6",
  data() {
    return {
      chartData: {
        nodes: [],
        edges: [],
      },
      graph: null,
      stencil: null,
    };
  },

  mounted() {
    const graph = new Graph({
      container: document.getElementById("graph-container"),
      grid: true,
      mousewheel: {
        enabled: true,
        zoomAtMousePosition: true,
        modifiers: "ctrl",
        minScale: 0.5,
        maxScale: 3,
      },
      connecting: {
        router: {
          name: "manhattan",
          args: {
            padding: 1,
          },
        },
        connector: {
          name: "rounded",
          args: {
            radius: 8,
          },
        },
        anchor: "center",
        connectionPoint: "anchor",
        allowBlank: false,
        snap: {
          radius: 20,
        },
        createEdge() {
          return new Shape.Edge({
            attrs: {
              line: {
                stroke: "#A2B1C3",
                strokeWidth: 2,
                targetMarker: {
                  name: "block",
                  width: 12,
                  height: 8,
                },
              },
            },
            zIndex: 0,
          });
        },
        validateConnection({ targetMagnet }) {
          return !!targetMagnet;
        },
      },
      highlighting: {
        magnetAdsorbed: {
          name: "stroke",
          args: {
            attrs: {
              fill: "#5F95FF",
              stroke: "#5F95FF",
            },
          },
        },
      },
      resizing: true,
      rotating: true,
      selecting: {
        enabled: true,
        rubberband: true,
        showNodeSelectionBox: true,
      },
      snapline: true,
      keyboard: true,
      clipboard: true,
    });

    const stencil = new Addon.Stencil({
      title: "流程图",
      target: graph,
      stencilGraphWidth: 200,
      stencilGraphHeight: 180,
      collapsable: true,
      groups: [
        {
          title: "基础流程图",
          name: "group1",
        },
        {
          title: "基础流程图2",
          name: "group2",
        },
      ],
      layoutOptions: {
        columns: 2,
        columnWidth: 80,
        rowHeight: 55,
      },
    });
    document.getElementById("stencil").appendChild(stencil.container);

    const showPorts = (ports, show) => {
      for (let i = 0, len = ports.length; i < len; i = i + 1) {
        ports[i].style.visibility = show ? "visible" : "hidden";
      }
    };
    graph.on("node:mouseenter", () => {
      const container = document.getElementById("graph-container");
      const ports = container.querySelectorAll(".x6-port-body");
      showPorts(ports, true);
    });
    graph.on("node:mouseleave", () => {
      const container = document.getElementById("graph-container");
      const ports = container.querySelectorAll(".x6-port-body");
      showPorts(ports, false);
    });

    const ports = {
      groups: {
        top: {
          position: "top",
          attrs: {
            circle: {
              r: 4,
              magnet: true,
              stroke: "#5F95FF",
              strokeWidth: 1,
              fill: "#fff",
              style: {
                visibility: "hidden",
              },
            },
          },
        },
        right: {
          position: "right",
          attrs: {
            circle: {
              r: 4,
              magnet: true,
              stroke: "#5F95FF",
              strokeWidth: 1,
              fill: "#fff",
              style: {
                visibility: "hidden",
              },
            },
          },
        },
        bottom: {
          position: "bottom",
          attrs: {
            circle: {
              r: 4,
              magnet: true,
              stroke: "#5F95FF",
              strokeWidth: 1,
              fill: "#fff",
              style: {
                visibility: "hidden",
              },
            },
          },
        },
        left: {
          position: "left",
          attrs: {
            circle: {
              r: 4,
              magnet: true,
              stroke: "#5F95FF",
              strokeWidth: 1,
              fill: "#fff",
              style: {
                visibility: "hidden",
              },
            },
          },
        },
      },
      items: [
        {
          group: "top",
        },
        {
          group: "right",
        },
        {
          group: "bottom",
        },
        {
          group: "left",
        },
      ],
    };

    Graph.registerNode(
      "custom-rect",
      {
        inherit: "rect",
        width: 66,
        height: 36,
        attrs: {
          body: {
            strokeWidth: 1,
            stroke: "#5F95FF",
            fill: "#EFF4FF",
          },
          text: {
            fontSize: 12,
            fill: "#262626",
          },
        },
        ports: { ...ports },
      },
      true
    );

    Graph.registerNode(
      "custom-polygon",
      {
        inherit: "polygon",
        width: 66,
        height: 36,
        attrs: {
          body: {
            strokeWidth: 1,
            stroke: "#5F95FF",
            fill: "#EFF4FF",
          },
          text: {
            fontSize: 12,
            fill: "#262626",
          },
        },
        ports: {
          ...ports,
          items: [
            {
              group: "top",
            },
            {
              group: "bottom",
            },
          ],
        },
      },
      true
    );

    Graph.registerNode(
      "custom-circle",
      {
        inherit: "circle",
        width: 45,
        height: 45,
        attrs: {
          body: {
            strokeWidth: 1,
            stroke: "#5F95FF",
            fill: "#EFF4FF",
          },
          text: {
            fontSize: 12,
            fill: "#262626",
          },
        },
        ports: { ...ports },
      },
      true
    );

    const r1 = graph.createNode({
      shape: "custom-rect",
      label: "开始",
      attrs: {
        body: {
          rx: 20,
          ry: 26,
        },
      },
    });
    const r2 = graph.createNode({
      shape: "custom-rect",
      label: "过程",
    });
    const r3 = graph.createNode({
      shape: "custom-rect",
      attrs: {
        body: {
          rx: 6,
          ry: 6,
        },
      },
      label: "可选过程",
    });
    const r4 = graph.createNode({
      shape: "custom-polygon",
      attrs: {
        body: {
          refPoints: "0,10 10,0 20,10 10,20",
        },
      },
      label: "决策",
    });
    const r5 = graph.createNode({
      shape: "custom-polygon",
      attrs: {
        body: {
          refPoints: "10,0 40,0 30,20 0,20",
        },
      },
      label: "数据",
    });
    const r6 = graph.createNode({
      shape: "custom-circle",
      label: "连接",
    });
    stencil.load([r1, r2, r3, r4, r5, r6], "group1");

    this.graph = graph;
    this.stencil = stencil;

    this.getData();
  },

  methods: {
    getData() {
      let graph = this.graph;
      let stencil = this.stencil;
      setTimeout(() => {
        const ports = {
          groups: {
            top: {
              position: "top",
              attrs: {
                circle: {
                  r: 4,
                  magnet: true,
                  stroke: "#5F95FF",
                  strokeWidth: 1,
                  fill: "#fff",
                  style: {
                    visibility: "hidden",
                  },
                },
              },
            },
            right: {
              position: "right",
              attrs: {
                circle: {
                  r: 4,
                  magnet: true,
                  stroke: "#5F95FF",
                  strokeWidth: 1,
                  fill: "#fff",
                  style: {
                    visibility: "hidden",
                  },
                },
              },
            },
            bottom: {
              position: "bottom",
              attrs: {
                circle: {
                  r: 4,
                  magnet: true,
                  stroke: "#5F95FF",
                  strokeWidth: 1,
                  fill: "#fff",
                  style: {
                    visibility: "hidden",
                  },
                },
              },
            },
            left: {
              position: "left",
              attrs: {
                circle: {
                  r: 4,
                  magnet: true,
                  stroke: "#5F95FF",
                  strokeWidth: 1,
                  fill: "#fff",
                  style: {
                    visibility: "hidden",
                  },
                },
              },
            },
          },
          items: [
            {
              group: "top",
            },
            {
              group: "right",
            },
            {
              group: "bottom",
            },
            {
              group: "left",
            },
          ],
        };

        Graph.registerNode(
          "custom-rect",
          {
            inherit: "rect",
            width: 66,
            height: 36,
            attrs: {
              body: {
                strokeWidth: 1,
                stroke: "#5F95FF",
                fill: "#EFF4FF",
              },
              text: {
                fontSize: 12,
                fill: "#262626",
              },
            },
            ports: { ...ports },
          },
          true
        );

        Graph.registerNode(
          "custom-polygon",
          {
            inherit: "polygon",
            width: 66,
            height: 36,
            attrs: {
              body: {
                strokeWidth: 1,
                stroke: "#5F95FF",
                fill: "#EFF4FF",
              },
              text: {
                fontSize: 12,
                fill: "#262626",
              },
            },
            ports: {
              ...ports,
              items: [
                {
                  group: "top",
                },
                {
                  group: "bottom",
                },
              ],
            },
          },
          true
        );

        Graph.registerNode(
          "custom-circle",
          {
            inherit: "circle",
            width: 45,
            height: 45,
            attrs: {
              body: {
                strokeWidth: 1,
                stroke: "#5F95FF",
                fill: "#EFF4FF",
              },
              text: {
                fontSize: 12,
                fill: "#262626",
              },
            },
            ports: { ...ports },
          },
          true
        );

        const r1 = graph.createNode({
          shape: "custom-rect",
          label: "开始",
          attrs: {
            body: {
              rx: 20,
              ry: 26,
            },
          },
        });
        const r2 = graph.createNode({
          shape: "custom-rect",
          label: "过程",
        });
        const r3 = graph.createNode({
          shape: "custom-rect",
          attrs: {
            body: {
              rx: 6,
              ry: 6,
            },
          },
          label: "可选过程",
        });
        const r4 = graph.createNode({
          shape: "custom-polygon",
          attrs: {
            body: {
              refPoints: "0,10 10,0 20,10 10,20",
            },
          },
          label: "决策",
        });
        const r5 = graph.createNode({
          shape: "custom-polygon",
          attrs: {
            body: {
              refPoints: "10,0 40,0 30,20 0,20",
            },
          },
          label: "数据",
        });
        const r6 = graph.createNode({
          shape: "custom-circle",
          label: "连接",
        });
        stencil.load([r1, r2, r3, r4, r5, r6], "group2");
      }, 5000);
    },
  },
};
</script>

<style lang="scss" scoped>
.antv-x6 {
  display: flex;
  .stencil {
    width: 200px;
    height: 300px;
    background: yellowgreen;
  }

  .graph-container {
    width: 400px;
    height: 300px;
    background: turquoise;
  }
}
</style>