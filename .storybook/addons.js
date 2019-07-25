import "@storybook/addon-actions/register";
import "@storybook/addon-links/register";

// @storybook/addon-info插件比较特殊，不需要提前注册，它可以显示story的源码，并针对props提供一些文档。
import "[@storybook](/user/storybook)/addon-actions/register"; // 记录事件日志
import "[@storybook](/user/storybook)/addon-notes/register"; // story笔记文档，支持markdown
import "[@storybook](/user/storybook)/addon-options/register"; // storybook页面自定义
import "[@storybook](/user/storybook)/addon-links/register"; // storybook页面跳转
import "[@storybook](/user/storybook)/addon-knobs/register"; // 组件可视化配置
