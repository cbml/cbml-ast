/**
 * 语法树节点<!--{en}CBMLTree AST nodes are represented as Node objects-->
 */
export interface Node {
  /**
   * 节点类型
   */
  type: string
  /**
   * 节点在代码中的范围
   */
  range?: [number, number]
  /**
   * 节点在源码中的位置
   */
  loc?: SourceLocation | null
}

/**
 * 源码位置信息
 */
export interface SourceLocation {
  /**
   * 源码部分
   */
  source: string | null
  /**
   * 起始位置
   */
  start: Position
  /**
   * 结束位置
   */
  end: Position
}

/**
 * 代码位置
 */
export interface Position {
  /**
   * 行号
   */
  line: number // >= 1
  /**
   * 列号
   */
  column: number // >= 0
  /**
   * 代码位置
   */
  offset: number // >= 0
}

/**
 * 代码块所用语言
 */
export type Language = 'xml' | 'c' | 'pascal' | 'python' | 'lua' | 'cbml' | 'shell' | 'common'

/**
 * 属性
 */
export interface Attribute {
  /**
   * 属性值
   */
  value: string
  /**
   * 引号风格
   */
  quoted: string | '' | '"' | "'"
}

/**
 * 属性集合
 */
export interface Attributes {
  [name: string]: Attribute
}

/**
 * 基础元素
 */
export interface Element extends Node {
  tag: string
  attributes: Attributes
  language: Language
}

/**
 * 容器元素
 */
export interface ContainerElement extends Element {
  body: Node[]
}

/**
 * CBML 根元素
 */
export interface CBMLElement extends ContainerElement {
  tag: '#cbml'
  language: 'cbml'
  type: 'CBMLElement'
}

/**
 * 复合元素
 */
export interface BlockElement extends ContainerElement {
  type: 'BlockElement'
}

/**
 * 复合注释元素
 */
export interface CommentElement extends ContainerElement {
  type: 'CommentElement'
}

/**
 * 单体元素
 */
export interface VoidElement extends Element {
  type: 'VoidElement'
}

/**
 * 文本元素
 */
export interface TextNode extends Node {
  type: 'TextNode'
  content: string
}
